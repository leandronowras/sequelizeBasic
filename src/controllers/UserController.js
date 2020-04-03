const User = require('../models/User')

module.exports = {
    async index (req, res) { // metodo para a listagem de usuario na rota get
        const users = await User.findAll()

        return res.json(users)
    },


    async store(req, res) { //metodo para a criacao de usuario na rota post
        const { name, email } = req.body;

        const user = await User.create({ name, email })

        return res.json(user)
    }
}
