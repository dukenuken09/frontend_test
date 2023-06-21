describe('Counter spec', () => {
  it('Should show the content of the two tabs', () => {
    cy.visit('/')
    cy.get('[data-cy=tab_1]').click()
    cy.get('#data_item').contains('440/123')
    cy.get('[data-cy=tab_0]').click()
    cy.get('#data_item').contains('14730/4782')
  })
})


 