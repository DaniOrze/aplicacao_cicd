# Front-End Developer CI/CD - Vercel

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![material_ui](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)
![Jasmine](https://img.shields.io/badge/Jasmine-8A4182?style=for-the-badge&logo=jasmine&logoColor=white)
![eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

[VIEW DEMO](https://aplicacao-cicd.vercel.app/)

If you prefer to read in Brazilian Portuguese, please, click [here](./README-ptbr.md).

This project using Angular 16 aims to demonstrate an application utilizing CI/CD for deployment on Vercel, where its basic function is to calculate the average of three values.

<p align="center">
  <p>
    <img src="src/assets/tela_media.png" width="400px" />
    <img src="src/assets/teste_media.png" width="400px" />
  </p>
</p>

## Features

- [x] User-friendly interface using Angular's Material UI.
- [x] Implementation of the average calculation, considering three numbers as input.
- [x] Achievement of 100% test coverage in unit tests.
- [x] Configuration and deployment through CI/CD on Vercel.
- [x] Implementation of CI, including build, unit tests, and linting to maintain code quality.
- [x] Configuration of CD, covering unit tests and the production deployment process.

## Prerequisites

To run this project locally, is important to have the following installed:

- Node.js
- npm (Node Package Manager)

## Getting Started

- Clone the repository to your local machine:

```bash
git clone https://github.com/DaniOrze/aplicacao_cicd.git
```

- Navigate to the project's directory:

```bash
cd aplicacao_cicd
```

### Starting the Front-end

- Install the dependencies:

```bash
npm install
```

- Start the application:

```bash
ng serve
```

This will launch in: `http://localhost:4200`

### Running the unit tests

```bash
ng test
```

### Running the unit tests coverage

```bash
ng test --code-coverage --source-map
```

## Contribute

Contributions are welcome! If you come across any areas for improvement or have suggestions, please open an issue or submit a pull request to the repository.

## License

This project is licensed under the [MIT](./LICENSE) License.
