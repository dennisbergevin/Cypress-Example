/* eslint-disable class-methods-use-this, no-console, no-undef */

const Mocha = require('mocha');
const { EVENT_RUN_END, EVENT_TEST_PASS, EVENT_TEST_RETRY } = Mocha.Runner.constants;

class MyReporter {
  constructor(runner) {
    this._indents = 0;
    var retries = new Map();
    var flakyTests = new Map();

    runner
      .on(EVENT_TEST_PASS, (test) => {
        if (retries.has(test.title)) {
          flakyTests.set(test.title, retries.get(test.title));
        }
      })
      .on(EVENT_TEST_RETRY, (test) => {
        if (retries.has(test.title)) {
          retries.set(test.title, retries.get(test.title) + 1);
        } else {
          retries.set(test.title, 1);
        }
      })
      .once(EVENT_RUN_END, () => {
        if (flakyTests.size > 0) {
          console.log('Flaky tests (were fixed after rerunning): ');
          console.table(
            Array.from(flakyTests).map(([k, v]) => ({
              'Test title': k,
              Retries: v,
            }))
          );
        }
      });
  }
}

module.exports = MyReporter;
