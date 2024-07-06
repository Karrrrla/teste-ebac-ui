/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') 
        cy.get('#username').type('karla@teste.com.br') 
        cy.get('#password').type('1234')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, karla (não é karla? Sair)')
    })

}) 