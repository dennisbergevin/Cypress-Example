import main from "../helpers/pageObjects/mainPage";
import article from "../helpers/pageObjects/newArticlePage";
import access from "../helpers/pageObjects/accessPage";

const randomUser = access.getRandomUser(1000000);
const value = "test";

describe("Sign up a new user", () => {
  before(() => {
    access.navigateToSignUp();
    access.signUp(randomUser);
  });

  it("Should sign up new user and verify user name displays in profile", () => {
    // Assert Profile Shows User's Name
    main.profileTab
      .should("be.visible")
      .click()
      .then(() => {
        main.pageHeader.should("contain", `${randomUser}`);
      });

    // Ensure Logout Lands User On Login Page
    main.logOutTab.click();
    cy.url().should("eq", "http://localhost:3000/login");
  });
});

describe("Login and create/verify new record", () => {
  before(() => {
    access.navigateToLogin();
    access.login(randomUser);
  });

  it("Should login and create/verify new record", () => {
    // Create New Record
    main.newArticleBtn.should("be.visible").click();
    article.createRecord(value);

    // Assert Success Message Appears
    article.successMessage.should("contain", "Successfully created article!");
  });
});
