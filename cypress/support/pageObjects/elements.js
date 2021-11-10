class Elements {

    
    //HOME
    x_newsletter = ()=> {
        return 'div[id="content-modal-newsletter"] > div > div > div > button[aria-label="Close"]'
    }
 
    x_cep = () => {
        return 'div[class="modal-cep"] > div[class="modal-cep__close js-close-modal"]'
    }

    btn_busca = () => {
        return 'ul[class="list-inline"] > li > a[class="toggle-search"]'
    } 
    
    busca_item = () =>{
        return `ul[class="list-inline"] > li > a[class="toggle-search"]`
    }

    item = () =>{
        return `h3 > a[title="${Cypress.env("item")}"]`
       
    }

    item_opt1 = () =>{
        return `h3 > a[title="${Cypress.env("item1")}"]`
        
     }

    item_opt2 = () =>{
        return `h3 > a[title="${Cypress.env("item2")}"]`
        
     }

    qtd_card = () => {
        return '.amount-items-em'
     }

    icone_card = () => {
        return '.frn-icon-bag-smile-empty'
     }

    //PDP
    
    componente_tamanho = () => {
             return 'select[id="espec_0_opcao_0"]'
    }

    componente_Card = () => {
        return '.buy-button-box .add-cart>a'
    }
    componente_continuar_comprando = () => {
        return '.continuar-comprando'
    }

    cep_pdp = () => {
        return 'div[class="product-page__shipping"] > input[id="postal-code"]'
    }

    btn_enviar_cep = () => {
        return 'div[class="product-page__shipping"] > button[class="postal-code-send"]'
    }

    disponibilidade_frete = () => {
        return 'div[class="shipping-results"] > table > tbody > tr:nth-child(1)>td:nth-child(1)'
    }

    //CARD
    x_elemento_qtd_card = () => {
        return 'a[class="remove-link remove-link-0"]>i'
    }

    btn_finalizar_compra = () => {
        return 'a[class="finish-order-btn"]'
    }

    //CHECKOUT

    btn_finalizar_pedido = () => {
        return '#cart-to-orderform'
    }

    campo_email = () => {
        return '#client-pre-email'
    }

    btn_continuar_pre_email = () => {
        return '#btn-client-pre-email'
    }

    primeiro_nome = () => {
        return '#client-first-name'
    }

    ultimo_nome = () => {
        return '#client-last-name'
    }

    cpf = () => {
        return '#client-document'
    }

    telefone = () => {
        return '#client-phone'
    }

    text_finalizar_compra = () => {
        return '#orderform-title'
    }
    
}

export default Elements
