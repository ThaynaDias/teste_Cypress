describe('Cadastro de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('verificar mensagens de email invalido', () => {
        cy.contains('a', 'Register now').click() //vai verificar o elemento A no html, a palavra "Register now"
        cy.contains('button', 'Register').click() //vai verificar o elemento button no html, a palavra "Register"
        cy.contains('ap-vmessage', 'Email is required').should('be.visible') //vai validar o elemento ap-vmessage no html e verificar a messagem e be.visible é para visualizar a mensagem 
        cy.get('input[formcontrolname="email"]').type('thayna')
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')
    })

    it('verificar mensagens validacao', () => {
        cy.contains('a', 'Register now').click() //vai verificar o elemento A no html, a palavra "Register now"
        cy.contains('button', 'Register').click() //vai verificar o elemento button no html, a palavra "Register"
        cy.contains('ap-vmessage', 'Email is required').should('be.visible') //vai validar o elemento ap-vmessage no html e verificar a messagem e be.visible é para visualizar a mensagem 
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
    })

     

    it('verificar mensagens de senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click() //vai verificar o elemento A no html, a palavra "Register now"
        cy.contains('button', 'Register').click() //vai verificar o elemento button no html, a palavra "Register"
        cy.contains('ap-vmessage', 'Email is required').should('be.visible') //vai validar o elemento ap-vmessage no html e verificar a messagem e be.visible é para visualizar a mensagem 
        cy.get('input[formcontrolname="password"]').type('123')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')
        
    })

    it('verificar mensagens de que o nome do usuario deve estar em minusculo', () => {
        cy.contains('a', 'Register now').click() //vai verificar o elemento A no html, a palavra "Register now"
        cy.contains('button', 'Register').click() //vai verificar o elemento button no html, a palavra "Register"
        cy.contains('ap-vmessage', 'Email is required').should('be.visible') //vai validar o elemento ap-vmessage no html e verificar a messagem e be.visible é para visualizar a mensagem 
        cy.get('input[formcontrolname="userName"]').type('THAYNA')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible')
        
    })

    const usuarios = require('../../fixtures/usuarios.json')
    usuarios.forEach(usuario => {

        it.only(`registra novo usuario ${usuario.userName}`, () => {
            cy.contains('a', 'Register now').click() //vai verificar o elemento A no html, a palavra "Register now"
            cy.contains('button', 'Register').click() //vai verificar o elemento button no html, a palavra "Register"
            cy.get('input[formcontrolname="email"]').type(usuario.email)
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName)
            cy.get('input[formcontrolname="userName"]').type(usuario.userName)
            cy.get('input[formcontrolname="password"]').type(usuario.password)
            cy.contains('button', 'Register').click()
        })
    })
})  