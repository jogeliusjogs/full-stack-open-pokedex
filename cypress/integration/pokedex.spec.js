describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('Individual pokemon page link works', function() {
    cy.get('.list-item-name').contains('rattata').click()
    cy.get('.pokemon-name').contains('rattata')
  })
})