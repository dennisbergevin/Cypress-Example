class NewArticlePage {
  getTitle() {
    return cy.get("#title");
  }
  getBody() {
    return cy.get("#desc");
  }
  getTag() {
    return cy.get("#tags_tagsinput");
  }
  getSaveButton() {
    return cy.get("button").contains("Save");
  }
  getSuccessMessage() {
    return cy.get(".alert-success");
  }

  fillTitle(value) {
    const field = this.getTitle();
    field.type(value);
  }

  fillBody(value) {
    const field = this.getBody();
    field.type(value);
  }

  fillTag(value) {
    const field = this.getTag();
    field.type(value);
  }

  fillRecordFields(value) {
    this.fillTitle(value);
    this.fillBody(value);
    this.fillTag(value);
  }

  clickSaveButton() {
    const saveButton = this.getSaveButton();
    saveButton.click();
  }
}

export default NewArticlePage;
