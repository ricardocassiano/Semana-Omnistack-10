//Armazena a biblioteca axios para chamar outras APIs
const axios = require('axios');

//Importa as informações do desenvolvedor para cadastro
const Dev = require('../models/Dev');

//Importa a utilidade de passar um String como Array
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    //Listagem de todos os devs
    async index (request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store (request, response) {
        const { github_username, techs, latitude, longitude } = request.body;
    
        //Evita a duplicação de cadastros no banco
        let dev = await Dev.findOne({ github_username });
        if(!dev)
        {
                    //Utilização de acento grave no lugar das aspas ou apóstrofes
            //permite utilizar variáveis dentro da string.
        //Aqui é feita a chamada da api do github passando a variável github_username como parâmetro
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
        //Este comando mostrará no console tudo que a api retornou e que foi armazenado na variável apiResponse
        //console.log(apiResponse.data);
    
        //Desestruturação para obter somente o que desejo
        const { name = login, avatar_url, bio } = apiResponse.data;
    
        //Comando para checar se os dados chegaram certinho
        //console.log(name, github_username, avatar_url, bio);
    
        //Recebendo as tecnologias do dev e separando a string num vetor de strings
        const techsArray = parseStringAsArray(techs);
    
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        };
    
        dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location,
        });
        }


    

        return response.json(dev);
    }
};