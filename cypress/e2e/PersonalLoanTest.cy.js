describe('Personal Loan emi', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    let PersonalLoanAmount1 = '25,00,000'
    let loaninterest1='10%'
    let loanterm1='10'

    let PersonalLoanAmount2 = '50,00,000'
    let loaninterest2 ='7.5%'
    let loanterm2 ='15'

    let PersonalLoanAmount3 = '0'
    let loaninterest3 ='0'
    let loanterm3 ='0'

    it('Personal loan with first dataset', () => {

        cy.visit('https://emicalculator.net/')

        cy.get('iframe')
        cy.get('#personal-loan').click()
        cy.wait(2000)
        cy.get('#loanamountslider');

     cy.get('#loanamountsteps > span:nth-child(3)').click()
        cy.wait(2000)

        // cy.get('#loanamountslider').click({ multiple: true, force: true });
        //
        // cy.get('#loanamountslider').type(
        //     "{rightarrow}{rightarrow}"
        // );
        // cy.get('#loanamount').clear()
        // cy.get('#loanamount').type(PersonalLoanAmount1)
        // cy.get('#loaninterest').clear()
        // cy.get('#loaninterest').type(loaninterest1)
        // cy.get('#loanterm').clear()
        // cy.get('#loanterm').type(loanterm1)
        // cy.get('#loanterm').focus()
        //
        //
        // cy.get('#emiamount > p > span').contains('33,038')
        // cy.get('#emitotalinterest > p > span').contains('14,64,522')
        // cy.get('#emitotalamount > p > span').contains('39,64,522')
        //
        // cy.get('#emicalculatorinnerformwrapper').parent('#emicalculatordashboard').find('#emipiechart')
        //
        // cy.get('.highcharts-title').contains('Break-up of Total Payment')
        // cy.get('.highcharts-root').contains('63.1%')
        // cy.get('.highcharts-root').contains('36.9%')







    })
    // it('Personal loan with second dataset', () => {
    //
    //     cy.visit('https://emicalculator.net/')
    //
    //     cy.get('iframe')
    //     cy.get('#personal-loan').click()
    //     cy.get('#loanamount').clear()
    //     cy.get('#loanamount').type(PersonalLoanAmount2)
    //     cy.get('#loaninterest').clear()
    //     cy.get('#loaninterest').type(loaninterest2)
    //     cy.get('#loanterm').clear()
    //     cy.get('#loanterm').type(loanterm2)
    //     cy.get('#loanterm').focus()
    //
    //
    //     cy.get('#emiamount > p > span').contains('46,351')
    //     cy.get('#emitotalinterest > p > span').contains('33,43,111')
    //     cy.get('#emitotalamount > p > span').contains('83,43,111')
    //
    //     cy.get('#emicalculatorinnerformwrapper').parent('#emicalculatordashboard').find('#emipiechart')
    //
    //     cy.get('.highcharts-title').contains('Break-up of Total Payment')
    //     cy.get('.highcharts-root').contains('59.9%')
    //     cy.get('.highcharts-root').contains('40.1%')
    //
    //
    //
    //
    //
    //
    //
    // })
    // it('Personal loan with zero loan amount ', () => {
    //
    //     cy.visit('https://emicalculator.net/')
    //
    //     cy.get('iframe')
    //     cy.get('#personal-loan').click()
    //     cy.get('#loanamount').clear()
    //     cy.get('#loanamount').type(PersonalLoanAmount3)
    //     cy.get('#loaninterest').clear()
    //     cy.get('#loaninterest').type(loaninterest3)
    //     cy.get('#loanterm').clear()
    //     cy.get('#loanterm').type(loanterm3)
    //     cy.get('#loanterm').focus()
    //
    //
    //     cy.get('#emiamount > p > span').contains('0')
    //     cy.get('#emitotalinterest > p > span').contains('0')
    //     cy.get('#emitotalamount > p > span').contains('0')
    //
    //     cy.get('#emicalculatorinnerformwrapper').parent('#emicalculatordashboard').find('#emipiechart')
    //
    //     cy.get('.highcharts-title').contains('Break-up of Total Payment')
    //     cy.get('.highcharts-root').contains('0%')
    //
    //
    //
    //
    //
    //
    //
    // })

})