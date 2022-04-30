class MainPage {
  get newArticleBtn() {
    return cy.findByText('New');
  }

  get profileTab() {
    return cy.findByRole('link', { name: 'Profile' });
  }

  get logOutTab() {
    return cy.findByText('Logout');
  }

  get pageHeader() {
    return cy.get('.page-header');
  }
}

export default new MainPage();
