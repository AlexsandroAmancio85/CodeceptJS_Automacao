Funcionalidade('Cadastro');

Exemplo('Cadastro com Sucesso',  ({ Eu }) => {

    Eu.estouNaPagina('/register');
    Eu.preenchoOCampo('#user', 'João Silva');
    Eu.preenchoOCampo('#email', 'joao@teste.com');
    Eu.preenchoOCampo('#password', 'Senha123!');
    Eu.clico('#btnRegister');
    Eu.vejo('Cadastro realizado!');
});

Exemplo('Cadastro com email já registrado',  ({ Eu }) => {

    Eu.estouNaPagina('/register');
    Eu.preenchoOCampo('#user', 'Maria Santos');
    Eu.preenchoOCampo('#email', 'alexx@teste.com');
    Eu.preenchoOCampo('#password', 'Senha123!');
    Eu.clico('#btnRegister');
    Eu.vejo('Cadastro realizado!');
});

Exemplo('Cadastro com email inválido',  ({ Eu }) => {

    Eu.estouNaPagina('/register');
    Eu.preenchoOCampo('#user', 'Pedro Costa');
    Eu.preenchoOCampo('#email', 'email_invalido');
    Eu.preenchoOCampo('#password', 'Senha123');
    Eu.clico('#btnRegister');
    Eu.vejo('O campo e-mail deve ser prenchido corretamente');
});

Exemplo('Cadastro com senha menor que 6 dígitos',  ({ Eu }) => {

    Eu.estouNaPagina('/register');
    Eu.preenchoOCampo('#user', 'Ana Paula');
    Eu.preenchoOCampo('#email', 'ana@teste.com');
    Eu.preenchoOCampo('#password', '12345');
    Eu.clico('#btnRegister');
    Eu.vejo('O campo senha deve ter pelo menos 6 dígitos');
});

Exemplo('Cadastro com email vazio',  ({ Eu }) => {

    Eu.estouNaPagina('/register');
    Eu.preenchoOCampo('#user', 'Carlos Gomes');
    Eu.preenchoOCampo('#email', '');
    Eu.preenchoOCampo('#password', 'Senha123');
    Eu.clico('#btnRegister');
    Eu.vejo('O campo e-mail deve ser prenchido corretamente');
});

Exemplo('Cadastro com nome vazio',  ({ Eu }) => {

    Eu.estouNaPagina('/register');
    Eu.preenchoOCampo('#user', '');
    Eu.preenchoOCampo('#email', 'teste@teste.com');
    Eu.preenchoOCampo('#password', 'Senha123');
    Eu.clico('#btnRegister');
    Eu.vejo('O campo nome deve ser prenchido');
});

Exemplo('Cadastro com senha vazia',  ({ Eu }) => {

    Eu.estouNaPagina('/register');
    Eu.preenchoOCampo('#user', 'João Teste');
    Eu.preenchoOCampo('#email', 'joao@teste.com');
    Eu.preenchoOCampo('#password', '');
    Eu.clico('#btnRegister');
    Eu.vejo('O campo senha deve ter pelo menos 6 dígitos');
});
