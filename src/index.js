//As variáveis estão sendo criadas em forma de constante porque não
//precisarão ser alteradas durante a aplicação

//Variável que recebe o pacote express (Nos ajuda a criar as rotas do projeto)
const express = require('express');

//Criação da aplicação para ser visualizada por um servidor
const app = express();

//Criação da constante que fará a conexão com o banco de dados
const mongoose = require('mongoose');

//Importação das rotas para o arquivo principal (este)
const routes = require('./routes');

/*
Este comando é responsável por criar a requisição e a resposta quando o servidor for acessado através da URL
localhost:3333
A barra decide que a aplicação irá para a raiz do projeto, nenhum caminho alternativo.
A função declarada como segundo parâmetro trata a requisição e a resposta.
Neste momento, só precisamos tratar a resposta para saber que o servidor foi acessado.
Para isso, temos como retorno o "Hello World".

app.get('/', (request, response) => {
    return response.send('Hello World');
});*/

/*
Agora, para fazer a comunicação entre o back-end e o front-end sempre utilizamos a estrutura de dados json
E o Json não permite o envio de uma simples string, é necessário passar um vetor de valores ou um objeto
Neste exemplo, será passado um objeto
*/

app.use(express.json());

//Permitindo que a aplicação utilize as rotas importadas
app.use(routes);

//Conectando-se ao banco de dados
//Nesta string de conexão, é importante alterar o <user> e <password> para os que dão acesso
//ao banco de dados criado.
mongoose.connect('mongodb+srv://ricardo:omnistack@cluster0-b9qmx.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});



//Mongo DB - Bando de dados não relacional



//Criação da porta de acesso ao servidor
app.listen(3333);