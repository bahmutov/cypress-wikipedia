/// <reference types="cypress" />
it('loads the site', () => {
  cy.visit('/')
  cy.screenshot('wiki', {capture: 'runner'})
})
