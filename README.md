# Teste técnico Cashforce

## 📝 Descrição:
Um projeto fullstack para listagem de pedidos.

## 💻 Tecnologias utilizadas:
Dentro do README de cada diretório há todas as tecnologias utilizadas.

## ⚙️ Iniciando a aplicação:
O ```backend``` deverá ser inicializado para o correto funcionamento do ```frontend```
1. Clone o repositório e entre no diretório:
   ```
    git clone git@github.com:fredericobrion/teste-cashforce.git && cd teste-cashforce
   ```
2. Entre no diretório ```backend``` e crie as variáveis de ambiente:
   ```
   cd backend && cp .env.example .env
   ```
3. Suba o container que conterá o banco de dados e a aplicação:
   ```
   docker-compose up -d --build
   ```
4. Aguarde o banco de dados ficar operacional. Isso pode levar alguns minutos, já que o banco de dados será criado e populado através do ```docker-compose```.

5. Em um novo terminal entre no diretório ```frontend``` e instale as dependências:
   ```
   npm install
   ```
6. Faça o build da aplicação e inicie ela localmente:
   ```
   npm run build && npm run preview
   ```
7. A aplicação estará disponível em <a href="http://localhost:4173" target="_blank">http://localhost:4173</a>

## 🗺️ Funcionalidades
### Frontend
Uma aplicação onde é exibido os detalhes dos pedidos.

### Backend
Uma API RESTful que permite a listagem de pedidos.
