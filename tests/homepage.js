describe('Functionals tests', function() {
  it('Gets, types and asserts', function() {
    cy.visit('http://localhost:3000')
    
    //cy.pause()
    
    cy.get('.name')
      .type('')
    
    cy.get('Add').click()
    //cy.should('have.value','bill')
    
    
    
   /* cy.contains('Contact').click()
    
    cy.url()
      .should('include', '/Contact')
    
    cy.get('.firstname')
    cy.type('bill')
    cy.should('have.value','bill')*/
  })
})
