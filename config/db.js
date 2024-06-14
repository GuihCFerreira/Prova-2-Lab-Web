const Sequelize = require('sequelize');

const sequelizeConfig = {
    dialect: 'postgres',
    port: 5432,
    host: '0.0.0.0',
    logging: console.log
};

//database, user, senha
const sequelize = new Sequelize('aula', 'postgres', 'postgres', sequelizeConfig);

module.exports = {sequelize};