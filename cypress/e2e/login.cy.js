let user = {
    email: 'sagindik2003@gmail.com',
    password: 'sagindik2003@gmail.com',
}

let notUser = {
    email: 'sag2003@gmail.com',
    password: 'sag2003@gmail.com'
}

describe('Login test page', () => {
    it('test', () => {
        cy.visit('/')

        cy.contains('Новая коллекция')
            .should('be.visible')

        cy.get('[data-cy="login"]').should('be.visible').click()

        cy.url().should('include', '/login')

        cy.get('[data-cy="email"]').should('be.visible')
        cy.get('[data-cy="password"]').should('be.visible')

        cy.get('[data-cy="submit"]').should('be.visible').click()

        cy.get('.error-text').eq(0).should('contain', 'Пожалуйста, заполните обязательное поле').should('be.visible')
        cy.get('.error-text').eq(1).should('contain', 'Пожалуйста, заполните обязательное поле').should('be.visible')

        cy.get('[data-cy="email"]').type('safsafsaf')
        cy.get('[data-cy="password"]').type('123456789')

        cy.get('[data-cy="submit"]').click()

        cy.contains('Вы ввели неверный email').should('be.visible')

        cy.get('[data-cy="email"]')
            .click()
            .focused()
            .clear()
            .type(notUser.email)

        cy.get('[data-cy="password"]')
            .click()
            .focused()
            .clear()
            .type(notUser.password)

        cy.get('[data-cy="submit"]')
            .contains('ВОЙТИ')
            .click()

        cy.request({
            method: 'POST',
            url: 'https://market.it-hub.kz/api/login',
            failOnStatusCode: false,
            body: {
                email: notUser.email,
                password: notUser.password
            }
        }).then((response) => {
            expect(response.status).not.eq(200)

            cy.contains('При регистрации произошла ошибка. Попробуйте позже.').should('be.visible')
        })

        cy.get('[data-cy="email"]')
            .click()
            .focused()
            .clear()
            .type(user.email)
            .should('have.value', user.email)

        cy.get('[data-cy="password"]')
            .click()
            .focused()
            .clear()
            .type(user.password)
            .should('have.value', user.email)

        cy.get('[data-cy="submit"]')
            .contains('ВОЙТИ')
            .click()

        cy.request('POST', 'https://market.it-hub.kz/api/login', {
            email: user.email,
            password: user.password
        }).then(
            (response) => {
                expect(response.status).to.eq(200)
                expect(response.body.data.user.email).to.eq(user.email)
                expect(response.body.data).to.have.property('token')
                window.sessionStorage.setItem('token', response.body.data.token)
                cy.window()
                    .its("sessionStorage")
                    .invoke("getItem", "token")
                    .should("exist")
            }
        )
    });

})
