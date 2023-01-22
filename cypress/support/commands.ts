/// <reference types="cypress" />
// @ts-ignore
Cypress.Commands.add('goToDeployedSite', () => {
    cy.visit("http://localhost:3000");
})