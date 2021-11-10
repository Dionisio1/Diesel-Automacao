///import metodos from '../../../support/pageObjects/functions';
///import pageObjects from '../../../support/pageObjects/functions';
import Functions from '../pageObjects/functions';
const metodo = new Functions()

Given(/^Que esteja na pagina principal$/, () => {
    metodo.url_home();
    metodo.fechar_anuncio_newsletter();
    metodo.fechar_modal_cep();
 });


When(/^Verificar o produto "([^"]*)"$/, (itemProduto) => {
    Cypress.env("item", itemProduto)
    
    metodo.click_botao_busca()
    metodo.busca_item()
    metodo.clica_item()
});


When(/^Adicionar o produto "([^"]*)"$/, (itemProduto) => {
    Cypress.env("item", itemProduto)
    
    metodo.click_botao_busca()
    metodo.busca_item()
    metodo.clica_item()
    metodo.seleciona_tamanho()
    metodo.adicionando_card()
});


When(/^Adicionar o produto "([^"]*)" e "([^"]*)"$/, (itemProduto1,itemProduto2) => {
    Cypress.env("item1", itemProduto1)
    Cypress.env("item2", itemProduto2)

    metodo.click_botao_busca()
    metodo.busca_item_opt1()
    metodo.clica_item_opt1()
    metodo.seleciona_tamanho()
    metodo.adicionando_card()
    metodo.botao_continuar_comprando()
    metodo.click_botao_busca()
    metodo.busca_item_opt2()
    metodo.clica_item_opt2()
    metodo.seleciona_tamanho()
    metodo.adicionando_card()
    metodo.validando_qtd_card_igual_2()
    metodo.botao_continuar_comprando()
});


Then(/^Devo verificar o calculo de frete$/, () => {
    metodo.click_campo_cep_pdp()
    metodo.preenchendo_campo_cep_pdp()
    metodo.click_btn_enviar_cep()
    metodo.validar_disponibilidade_frete()
});


Then(/^Devo limpar todo o carrinho$/, () => {
    metodo.click_icone_card()
    metodo.removendo_item_carrinho()
    metodo.removendo_item_carrinho()
    metodo.validando_qtd_card_vazio()
});


Then(/^Devo preencher dados necessários$/, () => {
    metodo.finalizando_compra()
    metodo.finalizando_pedido()
    metodo.preenchendo_pre_email()
    metodo.click_btn_pre_email_continuar()
    metodo.preenchendo_primeiro_nome()
    metodo.preenchendo_ultimo_nome()
    metodo.preenchendo_cpf()
    metodo.preenchendo_telefone()
    metodo.validando_checkout()
});

