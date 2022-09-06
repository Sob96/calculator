it('visits the app', () => {
  cy.visit('/')
})

describe('Home page', () => {
  it('should calculate and save notes to history', () => {
    cy.get('.KvFtv').children().should('have.length', 20)

    cy.contains('7').dblclick()
    cy.get('.hVPVAJ div').should('have.text', '77')

    cy.contains('+').click()

    cy.contains('2').click()
    cy.contains('1').click()
    cy.get('.hVPVAJ div').should('have.text', '21')

    cy.contains('-').click()
    cy.get('.hVPVAJ div').should('have.text', '98')
    cy.get('.fGmInJ').children().should('have.length', 1)
    cy.get('.iHYqlk button').should('have.text', 'Clean All History')
    cy.get('.jULdQL').first().should('have.text', '77 + 21 = 98')


    cy.contains('4').click()
    cy.contains('3').dblclick()
    cy.get('.hVPVAJ div').should('have.text', '433')

    cy.contains('CE').click()
    cy.get('.hVPVAJ div').should('have.text', '43')

    cy.contains('*').click()
    cy.get('.hVPVAJ div').should('have.text', '55')
    cy.get('.fGmInJ').children().should('have.length', 2)
    cy.get('.jULdQL').last().should('have.text', '98 - 43 = 55')

    cy.contains('2').click()
    cy.get('.hVPVAJ div').should('have.text', '2')

    cy.contains('/').click()
    cy.get('.hVPVAJ div').should('have.text', '110')
    cy.get('.fGmInJ').children().should('have.length', 3)
    cy.get('.jULdQL').last().should('have.text', '55 * 2 = 110')

    cy.contains('9').click()

    cy.contains('=').click()
    cy.get('.hVPVAJ div').should('have.text', '12.222')
    cy.get('.fGmInJ').children().should('have.length', 4)
    cy.get('.jULdQL').last().should('have.text', '110 / 9 = 12.222')
  })

  it('should add +/- and dots', () => {
    cy.contains('3').click()
    cy.contains('.').click()
    cy.contains('.').click()
    cy.contains('7').click()

    cy.contains('+/-').click()
    cy.get('.hVPVAJ div').should('have.text', '-3.7')

    cy.contains('+').click()

    cy.contains('2').click()
    cy.contains('.').click()
    cy.contains('3').click()
    cy.contains('.').click()
    cy.get('.hVPVAJ div').should('have.text', '2.3')

    cy.contains('+/-').click()
    cy.get('.hVPVAJ div').should('have.text', '-2.3')

    cy.contains('%').click()
    cy.get('.hVPVAJ div').should('have.text', '-6')
    cy.get('.fGmInJ').children().should('have.length', 5)
    cy.get('.jULdQL').last().should('have.text', '-3.7 + -2.3 = -6')

    cy.contains('5').click()

    cy.contains('=').click()
    cy.get('.hVPVAJ div').should('have.text', '-1')
    cy.get('.fGmInJ').children().should('have.length', 6)
    cy.get('.jULdQL').last().should('have.text', '-6 % 5 = -1')

    cy.contains('+/-').click()
    cy.get('.hVPVAJ div').should('have.text', '1')

    cy.get('.kAnIrT:first-of-type').click()
    cy.get('.hVPVAJ div').should('have.text', '0')
  })


  it('should hide and clean history', () => {
    cy.get('.jULdQL').last().should('have.hidden')
    cy.get('.iHYqlk button').last().should('have.text', 'Show all').click().should('have.text', 'Hide all')
    cy.get('.jULdQL').last().should('not.have.hidden')

    cy.get('.iHYqlk button').first().click()
    cy.get('.fGmInJ').children().should('have.length', 0)
  })
})

describe('Header', () => {
  it('should move through the pages', () => {
    cy.get('.cZZzYp div').children().should('have.length', 3)
    cy.contains('MainClass').click()
    cy.url().should('include', 'class')

    cy.contains('Settings').click()
    cy.url().should('include', 'settings')
  })
})

describe('Settings', () => {
  it('should change theme', () => {
    cy.get('#theme').select('Dark theme')

    cy.get('body').should('have.css', 'background-color', 'rgb(0, 0, 0)')
    cy.get('.GRibM').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.get('.cRiOam label').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.reload()
  })


  it('should clean all data', () => {
    cy.contains('MainFunc').click()

    cy.contains('7').click()
    cy.contains('0').click()
    cy.contains('+').click()
    cy.contains('5').click()
    cy.contains('3').click()
    cy.contains('/').click()
    cy.contains('3').click()
    cy.contains('*').click()
    cy.contains('9').dblclick()

    cy.contains('Settings').click()

    cy.get('#theme').select('Light theme')
    cy.contains('Clean All').click()

    cy.contains('MainFunc').click()
    cy.get('.fGmInJ').children().should('have.length', 0)
    cy.get('.hVPVAJ div').should('have.text', '0')
  })
})