import testData from '../fixtures/testData.json'
describe('api test', () => {
    it('first api test',() => {

        cy.request('https://reqres.in/api/users?page=2').as('listofpages')


        cy.get('@listofpages').then((pagesData) => {
            cy.fixture('testData').then((dataFixture) => {
                 expect(dataFixture[0].id).to.deep.equal(7)
                 expect(pagesData.status).to.equal(200)
                 expect(pagesData).to.have.property('body')
                 cy.expect(pagesData.body.data).to.deep.equal(dataFixture)
                 expect(pagesData.body.data[0].id).to.equal(dataFixture[0].id)
                 expect(pagesData.body.data[0].email).to.equal(dataFixture[0].email)
                 expect(pagesData.body.data[0].first_name).to.equal(dataFixture[0].first_name)
                 expect(pagesData.body.data[0].last_name).to.equal(dataFixture[0].last_name)
                 expect(pagesData.body.data[0].avatar).to.equal(dataFixture[0].avatar)
               
                 
                })
        })
       
    

    })
})