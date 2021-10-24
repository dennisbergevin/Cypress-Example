class MainPage {
  getNewArticle() {
    return cy.get(".nav-link").contains("New");
  }
  getProfile() {
    return cy.get(".nav-link").contains("Profile");
  }
  getLogOut() {
    return cy.get(".nav-link").contains("Logout");
  }
  clickProfile() {
    const navButton = this.getProfile();
    navButton.click();
  }
  clickLogOut() {
    const navButton = this.getLogOut();
    navButton.click();
  }

  clickNewArticle() {
    const navButton = this.getNewArticle();
    navButton.click();
  }
}

export default new MainPage();
