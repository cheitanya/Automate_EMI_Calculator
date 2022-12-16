///<reference types="cypress-iframe" />
describe('Home Loan emi', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  const isGreaterThan = (limit) => (x) => x > limit
  it('Home loan', () => {

    cy.visit('https://emicalculator.net/')

      cy.get('iframe')
      cy.get('#loanamount').clear()
      cy.get('#loanamount').type('25,00,000')
      cy.get('#loaninterest').clear()
      cy.get('#loaninterest').type('10')
      cy.get('#loanterm').clear()
      cy.get('#loanterm').type('10')
      cy.get('#emicalculatorinnerformwrapper').parent('#emicalculatordashboard').find('#emipiechart')


    cy.get('#emiamount > p > span').contains('24,126')
    cy.get('#emitotalinterest > p > span').contains('32,90,130')
    cy.get('#emitotalamount > p > span').contains('57,90,130')
    // let total= cy.get('#emitotalamount > p > span').value()
console.log("24356hhhjgv"+ cy.get('#emiamount > p > span').);
    // cy.get('#emitotalamount > p > span').should('not.have.value', '0')
    // cy.get('#emitotalamount > p > span').should('not.have.value', '0')






    // cy.contains('highcharts-container').parent('highcharts-series-group').find('[stroke-linejoin="round"]')
// cy.contains('highcharts-series highcharts-series-0 highcharts-pie-series highcharts-tracker').find('[stroke-linejoin="round"]')
//textContent:"11.7%" textContent:"88.3%"
    //cy.get(#)
    //     .parents()
    //.find()
    //.should('contain','singin')



    // cy.contains('#loanterm').type('25,00,000')
    // cy.get('#loanamountslider')

    // cy.contains('[name="loanamount"]').click()
    // cy.contains('loanamount').click()
    // cy.contains('#loanamount').type('25,00,000')


  })


})