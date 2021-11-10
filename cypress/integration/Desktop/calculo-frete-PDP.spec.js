/// <reference types="Cypress" />


import { get } from "lodash"
import Elements from "../../support/pageObjects/elements"
const elements = new Elements()

/// 1.   Realizar calculo de frete na PDP
        //Given Que esteja na pagina principal
        //When Acessar a pagina do produto
        //Then Devo verificar o calculo de frete

/// 2. Adicionar 2 produtos diferentes no carrinho e limpar todo o carrinho
/// 3. Fluxo de compra 
/// ( Adicionar produto no carrinho, 
/// navegar para o checkout,
/// preencher informações necessárias,
/// ir para tela de pagamentos e selecionar a opção de boleto ) 
/// Não fechar o pedido.

//---------------------desktop.home.feature------------------------
//---------------------desktop.PDP.feature-------------------------
//---------------------desktop.cart.feature------------------------
//---------------------desktop.checkout.feature--------------------


///Scenario: informando cenario gherkin
///    Given
///    When
///    Then




describe('Realizar calculo de frete na PDP',()=>{

    it ('Ação integrada para calculo de frete',()=>{
        cy.visit('/')
        cy.get('div[id="content-modal-newsletter"] > div > div > div > button[aria-label="Close"]').click()
        cy.get('div[class="modal-cep"] > div[class="modal-cep__close js-close-modal"]').click() 
        //clicando no botão busca
        cy.get('ul[class="list-inline"] > li > a[class="toggle-search"]').click()
        ///Bucando camisa
        ///cy.get('//body/header/div/div/fieldset/input[@id="smarthint-search-input"]').type('Camisa Diesel S-Riley-Dart').type('{enter}')
        ///cy.get('body > header > div >div > fieldset > input[id="smarthint-search-input"]').type('Camisa Diesel S-Riley-Dart').type('{enter}')
        ///cy.get('li[layout="60329806-237b-4704-b3c1-c2362be5fc67"] > div > a[title="Camisa Diesel S-Riley-Dart"]').click()
        cy.get('ul[class="list-inline"] > li > a[class="toggle-search"]').click().type('Camisa Diesel S-Riley-Dart').type('{enter}')
        ///clicando na camisa Diesel S-Riley-Dart
        cy.get('h3 > a[title="Camisa Diesel S-Riley-Dart"]').click()
        ///calculando frete
        //Clicando no campo CEP
        cy.get('div[class="product-page__shipping"] > input[id="postal-code"]').click({force: true})
        //Informando o CEP 58085440
        cy.get('div[class="product-page__shipping"] > input[id="postal-code"]').type('58085440')
        ///calcular frete
        //Clicando no botão enviar
        cy.get('div[class="product-page__shipping"] > button[class="postal-code-send"]').click()
        //Validando se ha campos que garantam o frete
        cy.get('div[class="shipping-results"] > table > tbody > tr:nth-child(1)>td:nth-child(1)').should('be.visible')
        //Validando se um deles é frete grátis
        cy.get('div[class="shipping-results"] > table > tbody > tr:nth-child(1)>td:nth-child(1)').should('text', 'Frete Grátis')
    })

})

describe('Adicionar 2 produtos diferentes no carrinho e limpar todo o carrinho',()=>{

    it ('Adicionando dois produtos',()=>{
        cy.visit('/')
        ///fechando modais
        cy.get('div[id="content-modal-newsletter"] > div > div > div > button[aria-label="Close"]').click()
        ///fechando modal cep
        cy.get('div[class="modal-cep"] > div[class="modal-cep__close js-close-modal"]').click()
        //clicando no botão busca
        cy.get('ul[class="list-inline"] > li > a[class="toggle-search"]').click({force: true})
        ///buscando outro item
        //clicando no botão busca
        cy.get('ul[class="list-inline"] > li > a[class="toggle-search"]').click().type('Jaqueta Diesel W-On-A').type('{enter}')
        ///clicando na jaqueta
        cy.get('h3 > a[title="Jaqueta Diesel W-On-A"]').click()
        ///selecionando o tamanho M
        cy.get('select[id="espec_0_opcao_0"]').select('M ITALIA - M BRASIL')
        ///clicando no botão comprar
        cy.get('.buy-button-box .add-cart>a').click()
        ///botão continuar comprando no Carrinho
        cy.get('.continuar-comprando').click({force: true})
        //clicando no botão busca
        cy.get('ul[class="list-inline"] > li > a[class="toggle-search"]').click().type('CALÇA DIESEL P-TARY-LOGO').type('{enter}')
        ///clicando na calça
        cy.get('h3 > a[title="Calça Diesel P-Tary-Logo"]').click()
        ///selecionando o tamanho 42
        cy.get('select[id="espec_0_opcao_0"]').select('32 ITALIA - 42 BRASIL')
        ///clicando no botão comprar
        cy.get('.buy-button-box .add-cart>a').click()
        ///botão continuar comprando no Carrinho
        cy.get('.continuar-comprando').click({force: true})
        ///Validando se a quantidade do carrinho são 2
        cy.get('.amount-items-em').should('text','2')
        ///clicando no icone do carrinho
        cy.get('.frn-icon-bag-smile-empty').click()
        ///Removendo primeiro item do carrinho
        cy.get('a[class="remove-link remove-link-0"]>i').click()
        ///Removendo segundo item do carrinho
        cy.get('a[class="remove-link remove-link-0"]>i').click()
        ///Validando se a quantidade do carrinho são 2
        cy.get('.amount-items-em').should('text','0')
        
    })

    it ('Fluxo de compra',()=>{
        ///ir para home
        cy.visit('/')
        ///fechando modais
        cy.get('div[id="content-modal-newsletter"] > div > div > div > button[aria-label="Close"]').click()
        ///fechando modal cep
        cy.get('div[class="modal-cep"] > div[class="modal-cep__close js-close-modal"]').click() 
        //clicando no botão busca
        cy.get('ul[class="list-inline"] > li > a[class="toggle-search"]').click()       
        ///Clicando no botão busca e buscando item jaqueta
        cy.get('ul[class="list-inline"] > li > a[class="toggle-search"]').click()
        .type('Jaqueta Diesel W-On-A').type('{enter}')
        ///Clicando no item jaqueta
        cy.get('h3 > a[title="Jaqueta Diesel W-On-A"]').click()
        ///selecionando o tamanho M
        cy.get('select[id="espec_0_opcao_0"]').select('M ITALIA - M BRASIL')
        ///clicando no botão comprar
        cy.get('.buy-button-box .add-cart>a').click()
        ///checkout
        cy.get('a[class="finish-order-btn"]').click({force: true})
        ///botão Fechar pedido
        cy.get('#cart-to-orderform').click()
        ///preencher campo email
        cy.get('#client-pre-email').type('dio@dio.com')
        ///clicando botão continuar
        cy.get('#btn-client-pre-email').click()
        ///preencher informações necessárias
        ///campo primeiro nome
        cy.get('#client-first-name').type('Dionisio')
        ///campo ultimo nome
        cy.get('#client-last-name').type('Marques')
        ///campo CPF
        cy.get('#client-document').type('717.019.470-80')
        ///campo telefone
        cy.get('#client-phone').type(83981255555)
        ///ir para tela de pagamentos e selecionar a opção de boleto
        cy.get('#orderform-title').should('text', 'Finalizar compra')
    })

})