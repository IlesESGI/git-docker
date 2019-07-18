 
describe('Basic Test', function() {
  it('clicks the link "type"', function() {
    cy.visit('localhost:3000')
    
    cy.pause()
    cy.contains('Contact')
      .click()
  })
})
