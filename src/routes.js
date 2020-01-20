//Arquivo específico para as rotas da aplicação

//Armazena apenas o módulo de rotas do Express
const { Router } = require('express');

//Importação do controlador da rota de cadastro de devs
const DevController = require('./controllers/DevController');

//Importação do controlador de busca
const SearchController = require('./controllers/SearchController');

//Importação do controlador de remoção
const DeleteController = require('./controllers/DeleteController');

//Importação do controlador de atualização
const UpdateController = require('./controllers/UpdateController');

//Cria uma aplicação para trabalhar com rotas
const routes = Router();

//Principais métodos HTTP para trabalhar com rotas no node:
//get, post, put, delete
//get --> buscar uma informação, listar coisas
//post --> utilizado quando se deseja criar alguma aplicação (Inserir)
//put --> edição 
//delete --> deletar

//Tipos de parâmetros

//Query Params: request.query (Filtros, ordenação, paginação, ...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

//Rota para listar devs
routes.get('/devs', DevController.index);

//Rota para buscar devs específicos
routes.get('/search', SearchController.index);

//Rota para cadastro de devs
routes.post('/devs', DevController.store);

//Rota para a exclusão de um dev
routes.delete('/delete', DeleteController.destroy);

//Rota para alteração/edição de um dev
routes.put('/update', UpdateController.update);

//Exportação desta rota para o restante da aplicação
module.exports = routes;