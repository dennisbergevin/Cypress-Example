import main from "../pageObjects/mainPage";
import article from "../pageObjects/newArticlePage";
import access from "../pageObjects/accessPage";

const randomUser = access.getRandomUser(1000000);

describe("Swimlane QA Infrastructure Practical", () => {
  it("Create a new user and verify user name displays in profile", () => {
    cy.visit("http://localhost:3000/signup");

    // Fill in required fields
    access.fillSignUpFields(`${randomUser}`);
    access.clickSignUpButton();

    // Assert User Lands On Main Page
    cy.url().should("eq", "http://localhost:3000/");

    // Assert Profile Shows User's Name
    main.clickProfile();
    cy.get(".page-header").should("contain", `${randomUser}`);

    // Ensure Logout Lands User On Login Page
    main.clickLogOut();
    cy.url().should("eq", "http://localhost:3000/login");
  });

  it("Login and create/verify new record", () => {
    cy.visit("http://localhost:3000/login");

    // Fill in required fields
    access.fillLoginFields(`${randomUser}`);
    access.clickLoginButton();

    // Assert User Lands On Main Page
    cy.url().should("eq", "http://localhost:3000/");

    // Create New Record
    main.clickNewArticle();
    article.fillRecordFields("test");
    article.clickSaveButton();

    // Assert Success Message Appears
    cy.get(article.getSuccessMessage).should(
      "contain",
      "Successfully created article!"
    );
  });
});
