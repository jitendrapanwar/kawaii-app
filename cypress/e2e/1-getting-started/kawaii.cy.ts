describe('Kawaii App', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays two heading items by default', () => {
    cy.get('h3').should('have.length', 2)
    cy.get('h3').should('contain', 'Choose Character')
    cy.get('h3').contains('Choose Character')
    
  })
  it('should have total 12 characters', () => {
    cy.get('#characters>button').should('have.length', 12)
      
  })

  it('should click on each characters', () => {
    cy.get('#characters>button').each(($el) => {
      cy.wrap($el).click();
    }) 
  })

  it('should click on each mood', () => {
    cy.get('#moods>button').each(($el) => {
      cy.wrap($el).click();
    }) 
  })

  xit('should click on each mood of each character', () => {
    cy.get('#characters>button').each(($el) => {
      cy.wrap($el).click();
      cy.get('#moods>button').each(($el) => {
        cy.wrap($el).click();
      }) 
    }) 
  })

  it('shold verify text of selected chracter', () => {
    cy.get('#characters').find('.selected').should('be.visible')

    cy.contains('button', 'cat').should('be.visible')
    
    cy.get('#characters > .selected').then( (x)=> {
      expect(x.text()).to.equal('cat')
      assert.equal(x.text(), 'cat')
    })
  }) 
})
