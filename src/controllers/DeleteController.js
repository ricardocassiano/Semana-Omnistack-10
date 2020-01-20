const Dev = require('../models/Dev');

module.exports = {
    async destroy (request, response) {
        const { github_username } = request.body;
    
        //Procura o dev no banco e se existir, deleta
        let dev = await Dev.findOneAndDelete({ github_username });
        return response.json(dev);
    }
};