/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() =>{
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
         
        cy.get('#username').type('karla@teste.com.br') 
        cy.get('#password').type('1234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, karla (não é karla? Sair)')
    })
    
    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('karl@teste.com.br') 
        cy.get('#password').type('1234')
        cy.get('.woocommerce-form > .button').click()
        //cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
        cy.get('.woocommerce-error').should('exist') 
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('karla@teste.com.br') 
        cy.get('#password').type('12344')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist') 
    })
    
})