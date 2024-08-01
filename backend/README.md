# Teste técnico Cashforce - Back-End

## 📝 Descrição:
Uma API RESTful que permite a listagem de pedidos.

## 💻 Tecnologias utilizadas:
- <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>
- <a href="https://nodejs.org/en" target="_blank">NodeJS</a>
- <a href="https://expressjs.com/" target="_blank">Express</a>
- <a href="https://sequelize.org/" target="_blank">Sequelize</a>
- <a href="https://www.docker.com/" target="_blank">Docker</a>
- <a href="https://www.mysql.com/" target="_blank">MySQL</a>
- <a href="https://jestjs.io/pt-BR/" target="_blank">Jest</a>
- <a href="https://nodemon.io/" target="_blank">Nodemon</a>
- <a href="https://github.com/expressjs/cors" target="_blank">Cors</a>
- <a href="https://github.com/motdotla/dotenv#readme" target="_blank">dotenv</a>

## ⚙️ Iniciando a aplicação:
1. Verifique se está dentro do diretório ```backend``` e crie o arquivo que irá conter as variáveis de ambiente.
  ```
  cp .env.example .env
  ```
2. Suba o container que conterá o banco de dados e a aplicação:
  ```
  docker-compose up -d --build
  ```

3. Aguarde o banco de dados ficar operacional. Isso pode levar alguns minutos, já que o banco de dados será criado e populado através do ```docker-compose```.

## 🧪 Testes
A aplicação possui testes unitários para verificar o seu funcionamento. Dentro do diretório ```backend``` utilize o comando ```npm test``` para executa-los.

## 🗺️ Funcionalidades

1. Health check através do endpoint ```GET /```

2. Listagem de pedidos através do endpoint ```GET /orders```