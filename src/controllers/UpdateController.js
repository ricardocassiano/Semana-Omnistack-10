//Código incompleto - necessita atualização

//Importação do esquema de developers
const Dev = require('../models/Dev');

//Importação da utilidade que converte a String num array de strings
//Importa a utilidade de passar um String como Array
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async update (request, response) {
        const { latitude, longitude, techs } = request.body;
    
        const techsArray = parseStringAsArray(techs);
    
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        };

        //Atualiza um dev apenas
        //Procura o dev no banco
        let dev = await Dev.updateOne({ location, techs });
        return response.json(dev);
    }
};