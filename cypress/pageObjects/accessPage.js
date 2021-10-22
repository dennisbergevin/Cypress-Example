class AccessPage {
  getEmail() {
    return cy.get("#email");
  }
  getPassword() {
    return cy.get("#password");
  }
  getFullName() {
    return cy.get("#name");
  }
  getUserName() {
    return cy.get('input[name="username"]');
  }
  getSignUpButton() {
    return cy.get("button").contains("Sign up");
  }
  getLoginButton() {
    return cy.get("button").contains("Log in");
  }

  fillEmail(value) {
    const field = this.getEmail();
    field.type(value);
  }

  fillPassword(value) {
    const field = this.getPassword();
    field.type(value);
  }

  fillFullName(value) {
    const field = this.getFullName();
    field.type(value);
  }

  fillUserName(value) {
    const field = this.getUserName();
    field.type(value);
  }

  fillSignUpFields(value) {
    this.fillEmail(`${value}@test.com`);
    this.fillPassword(value);
    this.fillFullName(value);
    this.fillUserName(value);
  }

  clickSignUpButton() {
    const button = this.getSignUpButton();
    button.click();
  }

  fillLoginFields(value) {
    this.fillEmail(`${value}@test.com`);
    this.fillPassword(value);
  }

  clickLoginButton() {
    const button = this.getLoginButton();
    button.click();
  }

  getRandomUser(max) {
    return Math.floor(Math.random() * max);
  }
}

export default AccessPage;
