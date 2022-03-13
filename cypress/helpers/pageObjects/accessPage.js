class AccessPage {
  get email() {
    return cy.get("#email");
  }

  get password() {
    return cy.get("#password");
  }

  get fullName() {
    return cy.get("#name");
  }

  get userName() {
    return cy.get('input[name="username"]');
  }

  get signUpBtn() {
    return cy.findByRole("button", { name: "Sign up" });
  }

  get loginBtn() {
    return cy.findByRole("button", { name: "Log in" });
  }

  navigateToSignUp() {
    cy.visit("/signup");
    cy.url().should("include", "/signup");
  }

  navigateToLogin() {
    cy.visit("/login");
    cy.url().should("include", "/login");
  }

  signUp(value) {
    // Fill in required fields
    this.email.type(`${value}@test.com`);
    this.password.type(value);
    this.fullName.type(value);
    this.userName.type(value).then(() => {
      this.signUpBtn.should("be.visible").click();
    });
    // Assert User Lands On Main Page
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  }

  login(value) {
    // Fill in required fields
    this.email.type(`${value}@test.com`);
    this.password.type(value).then(() => {
      this.loginBtn.should("be.visible").click();
    });
    // Assert User Lands On Main Page
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  }

  getRandomUser(max) {
    return Math.floor(Math.random() * max);
  }
}

export default new AccessPage();
