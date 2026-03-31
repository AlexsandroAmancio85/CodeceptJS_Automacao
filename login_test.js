Funcionalidade('login');

Exemplo('Login com Sucesso',  ({ Eu }) => {

    Eu.estouNaPagina('/login');
    Eu.preenchoOCampo('#user', 'alex@teste.com');
    Eu.preenchoOCampo('#password', '123456');
    Eu.clico('#btnLogin');
    Eu.vejo('Login realizado');
});

Exemplo('Login com email inválido',  ({ Eu }) => {

    Eu.estouNaPagina('/login');
    Eu.preenchoOCampo('#user', '');
    Eu.preenchoOCampo('#password', '123456');
    Eu.clico('#btnLogin');
    Eu.vejo('E-mail inválido.');
});

Exemplo('Login com senha inválida',  ({ Eu }) => {

    Eu.estouNaPagina('/login');
    Eu.preenchoOCampo('#user', 'alex@teste.com');
    Eu.preenchoOCampo('#password', '12345');
    Eu.clico('#btnLogin');
    Eu.vejo('Senha inválida.');
});