describe("login test", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Should login user with valid account data", () => {
    cy.login("test@test.com", "test"); //click Submit button
    cy.get("span.pt-2").should("have.text", "Добро пожаловать"); //Favorite page opened
  });

  it("Should not login with empty login", () => {
    cy.login(null, "test");
    cy.get("#mail")
      .then((elements) => elements[0].checkValidity())
      .should("be.false");

    cy.get("#mail")
      .then((elements) => elements[0].validationMessage)
      .should("contain", "Заполните это поле.");
  });

  it("Should not login with non-email login", () => {
    cy.login("non-email", "test");
    cy.get("#mail")
      .then((elements) => elements[0].checkValidity())
      .should("be.false");

    cy.get("#mail")
      .then((elements) => elements[0].validationMessage)
      .should("contain", "..................................");
  });
});
