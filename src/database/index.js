// faz a conexao da base de dados e exporta uma variavel para a criacao de uma tabela
const Sequelize = require ('sequelize')
const dbConfig = require ('../config/database')

const User = require ('../models/User')

const connection = new Sequelize (dbConfig)

User.init(connection)

module.exports = connection