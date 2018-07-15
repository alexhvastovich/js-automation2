//https://docs.cypress.io/api/commands/should.html#Syntax
//homework create mail and send to self and verify

describe("can search web", () => {
    it("can find cheese", () => {
        cy.visit("https://www.google.com");
        cy.Search("cheese");
        cy.get("td.navend").should("be.visible")
        cy.contains("Sign in").should("have.attr","target","_top");
    });
});