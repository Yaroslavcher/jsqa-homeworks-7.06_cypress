describe("BooksApp login and add tests", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("the app homepage is opened", () => {
    cy.get("#root > nav > div > a > span > span").should(
      "have.text",
      "Books list"
    );
  });

  it('click "Log in"', () => {
    //cy.get(".ml-2 btn btn-warning").click();
    cy.get(".ml-auto > .ml-2").click();
  });

  it("input email and password and click Submit", () => {
    cy.get("#mail").type("test@test.com").should("have.value", "test@test.com");
    cy.get("#pass").type("test").should("have.value", "test");
    cy.get(".ml-2 btn btn-success").click();

    // cy.get('.action-form').submit()
    //   .next().should('contain', 'Your form has been submitted!')
  });

  it("Favoritest page opened", () => {
    cy.get("span.pt-2").should("have.text", "Добро пожаловать");
  });
  it("add my book", () => {
    cy.contains("Add new").click();
    cy.get(".modal-title h4").should("have.text", "Book description");
    cy.get("#title").type("book1").should("have.value", "book1");
    cy.get("#description").type("good").should("have.value", "good");
    cy.get("#authors").type("author1").should("have.value", "author1");
    cy.get('.form-check-input [type="checkbox"]')
      .not("[disabled]")
      .check()
      .should("be.checked");
    cy.get(".ml-2 btn btn-success").click();
  });
});
