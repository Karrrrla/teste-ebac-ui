/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    })

    it('Deve selecionar um produto da lista', () => {
       produtosPage.buscarProdutoLista('Ajax Full-Zip Sweatshirt')
               cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Electra Bra Top'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });  
    
    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Electra Bra Top')
        cy.get('.product_title').should('contain', 'Electra Bra Top')
    });   

    it('Deve adicionar o produto ao carrinho', () => {
        let qtd = 5
        produtosPage.buscarProduto('Celeste Sports Bra')
        produtosPage.addProdutoCarrinho('XL', 'Yellow', qtd)
        cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.')
    });   

    it.only('Deve adicionar o produto ao carrinho - buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[1].tamanho, 
                dados[1].cor, 
                dados[1].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)

        })
      
    });   

});