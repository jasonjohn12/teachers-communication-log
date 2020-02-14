/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
    cy.get('#LoginButton').click();
  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('#formFirstName')
      .type('Jason').should('have.value', 'Jason')
      
      cy.get('#formLastName')
      .type('John').should('have.value', 'John')

      cy.get('#submit-button').click()
   
      cy.get('.student-data-count')
        .should('have.text', '1')

        cy.get('.card-header > .btn')
          .should('have.text', 'Jason John')

  })

  it('.type() - type into a DOM element submit with enter', () => {
    // https://on.cypress.io/type
    cy.get('#formFirstName')
      .type('Jason').should('have.value', 'Jason')
      
      cy.get('#formLastName')
      .type('John').should('have.value', 'John')

      .type('{enter}')
   
      cy.get('.student-data-count')
        .should('have.text', '1')

        cy.get('.card-header > .btn')
          .should('have.text', 'Jason John')

  })


})
