# 🧪 CodeceptJS Tests - Automação Web

<div align="center">

![CodeceptJS](https://img.shields.io/badge/CodeceptJS-3.7.7-2E8B57?style=flat-square&logo=codeceptjs)
![Playwright](https://img.shields.io/badge/Playwright-1.58.2-00D4FF?style=flat-square&logo=playwright)
![Node.js](https://img.shields.io/badge/Node.js-14+-339933?style=flat-square&logo=node.js)
![License](https://img.shields.io/badge/License-ISC-blue?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)

**Suite de testes automatizados de ponta a ponta (E2E) para validar fluxos de login e cadastro**

[Sobre](#sobre) • [Recursos](#recursos) • [Instalação](#instalação) • [Como Usar](#como-usar) • [Estrutura](#estrutura) • [Exemplos](#exemplos)

</div>

---

## 📋 Sobre

Projeto de **automação de testes web** desenvolvido com **CodeceptJS** e **Playwright**, focado em validar fluxos de autenticação (login e cadastro). Os testes são escritos em **português** (BDD) para melhor compreensão, com execução automatizada em navegadores reais.

Este projeto demonstra boas práticas em:
- ✅ Testes end-to-end (E2E)
- ✅ Padrão Page Object implícito
- ✅ Relatórios automatizados em HTML
- ✅ Execução em headless e modo visual

---

## 🎯 Recursos

- 🔐 **Testes de Login**: Cobertura completa de cenários de autenticação
- 📝 **Testes de Cadastro**: 7 cenários cobrindo validações de formulário
- 🎭 **BDD em Português**: Cenários descritos em linguagem natural (pt-BR)
- 🌐 **Playwright**: Automação moderna com suporte a múltiplos navegadores
- 📊 **Relatórios HTML**: Geração automática de relatórios detalhados
- 📝 **Steps Reutilizáveis**: Biblioteca de passos customizados para testes
- ⚡ **Smart Wait**: Esperas inteligentes por navegação de rede

---

## 🚀 Instalação

### Pré-requisitos
- **Node.js** 14+ instalado
- **npm** ou **yarn** como gerenciador de pacotes

### Passo a Passo

1. **Clone ou baixe o projeto**
```bash
git clone <seu-repositorio>
cd codecept_js
```

2. **Instale as dependências**
```bash
npm install
```

Isso instalará:
- `codeceptjs` - Framework de testes BDD
- `playwright` - Motor de automação web

---

## 💻 Como Usar

### Executar Todos os Testes
```bash
npx codeceptjs run
```

### Executar Testes de Login
```bash
npx codeceptjs run login_test.js
```

### Executar Testes de Cadastro
```bash
npx codeceptjs run register_test.js
```

### Executar um Teste Específico
```bash
npx codeceptjs run <nome_do_arquivo_test.js>
```

### Executar com Interface Visual (Headed Mode)
```bash
npx codeceptjs run --verbose
```

### Executar em Headless (Sem Janela do Navegador)
Edite `codecept.conf.js` e defina `show: false` na configuração do Playwright.

### Visualizar Relatório
Após a execução, abra o relatório em:
```
./output/report.html
```

---

## 📁 Estrutura do Projeto

```
codecept_js/
├── 📄 codecept.conf.js       # Configuração principal do CodeceptJS
├── 📄 login_test.js          # Cenários de testes de login (3 testes)
├── 📄 register_test.js       # Cenários de testes de cadastro (7 testes)
├── 📄 steps_file.js          # Definição de steps customizados
├── 📄 steps.d.ts             # TypeScript definitions
├── 📦 package.json           # Dependências do projeto
├── 📄 jsconfig.json          # Configuração JavaScript
├── 📁 output/                # Artefatos gerados
│   └── 📊 report.html        # Relatório dos testes
└── 📖 README.md              # Este arquivo
```

### Descrição dos Arquivos Principais

| Arquivo | Descrição |
|---------|-----------|
| `codecept.conf.js` | Configuração do CodeceptJS (navegador, URL base, helpers, plugins) |
| `login_test.js` | 3 cenários de teste do fluxo de login |
| `register_test.js` | 7 cenários de teste do fluxo de cadastro e validações |
| `steps_file.js` | Implementação dos steps customizados (ações reutilizáveis) |
| `steps.d.ts` | Type definitions para autocomplete dos steps |

---

## 🧪 Exemplos de Testes

### Teste 1: Login com Sucesso
```javascript
Exemplo('Login com Sucesso',  ({ Eu }) => {
    Eu.estouNaPagina('/login');
    Eu.preenchoOCampo('#user', 'alex@teste.com');
    Eu.preenchoOCampo('#password', '123456');
    Eu.clico('#btnLogin');
    Eu.vejo('Login realizado');
});
```

### Teste 2: Email Inválido
```javascript
Exemplo('Login com email inválido',  ({ Eu }) => {
    Eu.estouNaPagina('/login');
    Eu.preenchoOCampo('#user', '');
    Eu.preenchoOCampo('#password', '123456');
    Eu.clico('#btnLogin');
    Eu.vejo('E-mail inválido.');
});
```

### Teste 3: Senha Inválida
```javascript
Exemplo('Login com senha inválida',  ({ Eu }) => {
    Eu.estouNaPagina('/login');
    Eu.preenchoOCampo('#user', 'alex@teste.com');
    Eu.preenchoOCampo('#password', '12345');
    Eu.clico('#btnLogin');
    Eu.vejo('Senha inválida.');
});
```

### Teste 4: Cadastro com Sucesso
```javascript
Exemplo('Cadastro com Sucesso',  ({ Eu }) => {
    Eu.estouNaPagina('/register');
    Eu.preenchoOCampo('#user', 'João Silva');
    Eu.preenchoOCampo('#email', 'joao@teste.com');
    Eu.preenchoOCampo('#password', 'Senha123!');
    Eu.clico('#btnRegister');
    Eu.vejo('Cadastro realizado!');
});
```

### Teste 5: Cadastro com Email Inválido
```javascript
Exemplo('Cadastro com email inválido',  ({ Eu }) => {
    Eu.estouNaPagina('/register');
    Eu.preenchoOCampo('#user', 'Pedro Costa');
    Eu.preenchoOCampo('#email', 'email_invalido');
    Eu.preenchoOCampo('#password', 'Senha123');
    Eu.clico('#btnRegister');
    Eu.vejo('O campo e-mail deve ser prenchido corretamente');
});
```

### Teste 6: Cadastro com Senha Curta
```javascript
Exemplo('Cadastro com senha menor que 6 dígitos',  ({ Eu }) => {
    Eu.estouNaPagina('/register');
    Eu.preenchoOCampo('#user', 'Ana Paula');
    Eu.preenchoOCampo('#email', 'ana@teste.com');
    Eu.preenchoOCampo('#password', '12345');
    Eu.clico('#btnRegister');
    Eu.vejo('O campo senha deve ter pelo menos 6 dígitos');
});
```

---

## ⚙️ Configuração

### Arquivo: `codecept.conf.js`

Principais configurações:

```javascript
helpers: {
  Playwright: {
    browser: 'chromium',           // Navegador: chromium, firefox, webkit
    url: 'https://automationpratice.com.br',  // URL base
    show: true,                    // Modo visual (true) ou headless (false)
    waitForNavigation: "networkidle",  // Aguarda rede ficar inativa
    smartWait: 5000                // Espera inteligente em ms
  }
}
```

**Tradução**: Todos os testes e mensagens estão em português (pt-BR).

---

## 📊 Geração de Relatórios

O projeto está configurado com o plugin `htmlReporter`, que automaticamente gera relatórios após cada execução.

**Visualizar relatório:**
1. Execute os testes: `npx codeceptjs run`
2. Abra: `./output/report.html`

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **CodeceptJS** | 3.7.7 | Framework BDD para testes E2E |
| **Playwright** | 1.58.2 | Automação web moderna |
| **Node.js** | 14+ | Runtime JavaScript |
| **Chromium** | Latest | Navegador para testes |

---

## 💡 Próximos Passos

Para melhorar este projeto, você pode:

- 📝 Adicionar mais cenários de teste (redefinição de senha, validações avançadas, etc)
- 📊 Integrar com CI/CD (GitHub Actions, GitLab CI, Travis CI)
- 🔄 Implementar testes de regressão visual
- 🌐 Expandir para múltiplos navegadores (Firefox, Safari)
- 📱 Adicionar testes mobile/responsivo
- 🔐 Implementar testes com autenticação multi-fator

---

## 📝 License

Este projeto está sob a licença **ISC**.

---

## 👨‍💻 Autor

**Alex** - Portfolio de Automação de Testes  
*Desenvolvido com ❤️ usando CodeceptJS*

---

<div align="center">

### ⭐ Se encontrou este projeto útil, considere dar uma estrela!

[⬆ Voltar ao Topo](#-codeceptjs-tests---automação-web)

</div>
