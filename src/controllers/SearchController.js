const Dev = require('../models/Dev');

//Importa a utilidade de passar um String como Array
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs} = request.query;
        
        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });
        //console.log(techsArray);
        //buscar todos os devs num raio de 10km
        //Filtrar por tecnologia

        return response.json({ devs });
    }
}