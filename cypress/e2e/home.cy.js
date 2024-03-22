describe('Home page test', () => {
    it('category', () => {
        cy.visit('/')

        cy.url().should('include', '/')

        cy.contains('Новая коллекция')
            .should('be.visible')

        cy.request('https://market.it-hub.kz/api/categories')
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('data')
                assert.isArray(response.body.data, 'Массив категорий')
                expect(response.body.data.length).to.be.greaterThan(1)
                expect(response.body.data).to.have.length(5)
                expect(response.body.data[0].title).to.eq('exercitationem')
                expect(response.body.data[0].image).to.eq('https://market.it-hub.kz/storage/01HS7X7BKNXSK2N1H58NCTXMKC.png')
                expect(response.body.data[0].id).to.eq(1)
                expect(response.body.data[0].description).to.eq('Numquam dolore rerum autem nobis et ullam. Vel animi sequi dolores ut quos. Sed consequatur dignissimos fuga. Possimus doloremque doloremque sint aut ratione quo quo est.')
            })
    });
})