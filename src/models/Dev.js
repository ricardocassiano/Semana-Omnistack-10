//Importando a biblioteca para conexão com o banco de dados
const mongoose = require('mongoose');

//Importando o schema para a geolocalização (latitude e longitude)
const PointSchema = require('./utils/PointSchema');

//Definindo o esquema (estrutura) dessa entidade (classe)
const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Dev', DevSchema);