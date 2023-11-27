# Front-End Developer CI/CD - Vercel

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![material_ui](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)
![Jasmine](https://img.shields.io/badge/Jasmine-8A4182?style=for-the-badge&logo=jasmine&logoColor=white)
![eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

[VIEW DEMO](https://aplicacao-cicd.vercel.app/)

Este projeto utilizando Angular 16 tem como objetivo demonstrar uma aplicação utilizando CI/CD para Deploy no Vercel onde sua função básica é a de calcular a média entre três valores.

<p align="center">
  <p>
    <img src="src/assets/tela_media.png" width="400px" />
    <img src="src/assets/teste_media.png" width="400px" />
  </p>
</p>

## Funcionalidades

- [x] Interface amigável com a utilização do Material UI do Angular.
- [x] Implementação do cálculo da média, considerando três números como entrada.
- [x] Alcance de uma cobertura total de 100% nos testes unitários.
- [x] Configuração e realização de deploy por meio de CI/CD no Vercel.
- [x] Implementação de CI que inclui build, testes unitários e linting para manter a qualidade do código.
- [x] Configuração de CD, abrangendo testes unitários e o processo de deploy em produção.

## Pré-requisitos

Para executar este projeto localmente, é necessário ter instalado:

- Node.js
- npm (Node Package Manager)

## Iniciando

- Clone o repositório para sua máquina:

```bash
git clone https://github.com/DaniOrze/aplicacao_cicd.git
```

- Navegue até a pasta do projeto:

```bash
cd aplicacao_cicd
```

### Rodando o Front-end

- Instale as dependências:

```bash
npm install
```

- Execute a aplicação:

```bash
ng serve
```

A aplicação será iniciada no navegador padrão em: `http://localhost:4200`

### Executando os testes unitários

```bash
ng test
```

### Executando os testes unitários com cobertura

```bash
ng test --code-coverage --source-map
```

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request para o repositório.

## Licença

Este projeto está licenciado sob a licença [MIT](./LICENSE).
