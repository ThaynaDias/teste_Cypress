describe('Login de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com ')
        cy.intercept('POST', 'https://alurapic.herokuapp.com/user/login', {
        statusCode: 400
        }).as('stubPost')

    })

    it('fazer login de usuario valido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.wait('@stubPost')
        cy.contains('a', '(Logout').should('be.visible')
    })

    it('fazer login de usuario invalido', () => {
        cy.login('thayna', '123545')
        cy.on('window>:alert', (str) => {
            expect(str).to.equal('Invalid user name or passaword')
        })
    })

    
    it.only('fazer login do flavio', () => {
        cy.request({ // vai fazer um requisição para buscar o method pela url
            method: 'POST',
            url: 'https://apialurapic.herokuapp.com/user/login',
            body: Cypress.env()
       
        }).then((res) => { //vai retornar 
            expect(res.status).to.be.equal(200) //para confirmar se essas propriedades  
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id')
            expect(res.body.id).to.be.equal(1)
            expect(res.body).to.have.property('email')
            expect(res.body.email).to.be.equal("flavio@alurapic.com.br")
        })
    })

    it('busca fotos do flavio', () => {
        cy.request({ // vai fazer um requisição para buscar o method pela url
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/flavio/photos'
       
        }).then((res) => { //vai retornar 
            expect(res.status).to.be.equal(200) //para confirmar se essas propriedades  
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('Farol iluminado')
        })
    })

})   