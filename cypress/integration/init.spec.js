it('visits the app', () => {
  cy.visit('/')
})

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('check the navigation', () => {
    cy.get('ul').children().should('have.length', 22)
  })

  // it('check the keypad', () => {
  //   cy.get('ul').children().should('have.length', 22)
  // })

  // it('it check welcome title', () => {
  //   cy.get('#welcome')
  //     .should('be.visible')
  //     .contains('Welcome!')
  // })
})
