/// <reference types="Cypress" />

context("Actions", () => {
    beforeEach(() => {
      cy.visit("localhost:3000");
    });
    describe("Navbar layout", () => {
      it("should have navbar class", () => {
        cy.get(".navbar").should("exist");
      });
      it("should have Sinking Pirates as a logo", () => {
        cy.get(".navbar-brand").should("have.text", "Sinking Pirates");
      });
      it('should have form elements to login', () => {
        cy.get('#username').should('exist');
        cy.get('#password').should('exist');
        cy.get('#loginButton').should('exist')
      });
      it('should have placeholders in input field', () => {
        cy.get('#username').should('have.attr', 'placeholder', "Username")
        cy.get('#password').should('have.attr', 'placeholder', "Password")
      })
    });
  
    describe("Login Interaction", () => {
      it("should login with any username and password", () => {
        cy.get("#username").type("username").should("have.value", "username");
        cy.get("#password").type("password").should("have.value", "password");
        cy.get("#loginButton").click();
      });
      it("Should not login if username field is empty", () => {
        cy.get("#password").type("Password").should("have.value", "Password");
        cy.get("#loginButton").click();
        cy.get("#loginButton").should("exist");
      });
  
      it("Should not login if password field is empty", () => {
        cy.get("#username").type("username").should("have.value", "username");
        cy.get("#loginButton").click();
        cy.get("#loginButton").should("exist");
      });
    });
  });
  