class NewArticlePage {
  get titleField() {
    return cy.get("#title");
  }

  get bodyField() {
    return cy.get("#desc");
  }

  get tagField() {
    return cy.get("#tags_tagsinput");
  }

  get saveBtn() {
    return cy.findByText("Save");
  }

  get successMessage() {
    return cy.get(".alert-success");
  }

  createRecord(value) {
    this.titleField.type(value);
    this.bodyField.type(value);
    this.tagField.type(value).then(() => {
      this.saveBtn.should("be.visible").click();
    });
  }
}

export default new NewArticlePage();
