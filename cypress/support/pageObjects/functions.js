/// <reference types = "Cypress" />
import Elements from "./elements"
const elements = new Elements()


class Functions {

    //HOME
    url_home(){
        cy.visit('/');
    }

    fechar_anuncio_newsletter(){
        cy.get(elements.x_newsletter()).click()
    }

    fechar_modal_cep(){
        cy.get('div[class="modal-cep"] > div[class="modal-cep__close js-close-modal"]').click() 
    }

    click_botao_busca(){
        cy.wait(1000)
        cy.get('ul[class="list-inline"] > li > a[class="toggle-search"]').click() 
    }

    busca_item(){
        cy.get(elements.btn_busca()).click().type(`${Cypress.env("item")}`).type('{enter}')
    }
    
    busca_item_opt1(){
        cy.get(elements.btn_busca()).click().type(`${Cypress.env("item1")}`).type('{enter}')
    }

    busca_item_opt2(){
        cy.get(elements.btn_busca()).click().type(`${Cypress.env("item2")}`).type('{enter}')
    }

    clica_item(){
        cy.get(elements.item()).click()   
    }

    clica_item_opt1(){
        cy.get(elements.item_opt1()).click()   
    }

    clica_item_opt2(){
        cy.get(elements.item_opt2()).click()   
    }
 
    validando_qtd_card_igual_2(){
        cy.get(elements.qtd_card()).should('text','2')
    }

    validando_qtd_card_vazio(){
        cy.get(elements.qtd_card()).should('text','0')
    }

    click_icone_card(){
        cy.get(elements.icone_card()).click()
    }

    //PDP

    seleciona_tamanho(){
        cy.get(elements.componente_tamanho()).select('M ITALIA - M BRASIL')
    }

    botao_continuar_comprando(){
        cy.get(elements.componente_continuar_comprando()).click({force: true})
    }

    click_campo_cep_pdp(){
        cy.get(elements.cep_pdp()).click({force: true})
    }

    preenchendo_campo_cep_pdp(){
        cy.get(elements.cep_pdp()).type('58085440')
    }

    click_btn_enviar_cep(){
        cy.get(elements.btn_enviar_cep()).click()
    }

    validar_disponibilidade_frete(){
        cy.get(elements.disponibilidade_frete()).should('be.visible')
    }


    
    //CARD
    adicionando_card(){
        cy.get(elements.componente_Card()).click()
    }

    removendo_item_carrinho(){
        cy.get(elements.x_elemento_qtd_card()).click({force: true})
    }   
    
    finalizando_compra(){
        cy.wait(1000)
        cy.get(elements.btn_finalizar_compra()).click({force: true})
    }

    //CHECKOUT

    finalizando_pedido(){
        cy.get(elements.btn_finalizar_pedido()).click()
    }

    preenchendo_pre_email(){
        cy.get(elements.campo_email()).type('dio@dio.com')
    }

    click_btn_pre_email_continuar(){
        cy.get(elements.btn_continuar_pre_email()).click()
    }

    preenchendo_primeiro_nome(){
        cy.get(elements.primeiro_nome()).type('Dionisio')
    }

    preenchendo_ultimo_nome(){
        cy.get(elements.ultimo_nome()).type('Marques')
    }

    preenchendo_cpf(){
        cy.get(elements.cpf()).type('717.019.470-80')
    }

    preenchendo_telefone(){
        cy.get(elements.telefone()).type(83981255555)
    }

    validando_checkout(){
        cy.get(elements.text_finalizar_compra()).should('text', 'Finalizar compra')
    }
}

export default Functions