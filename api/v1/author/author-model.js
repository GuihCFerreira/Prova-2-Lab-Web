const Sequelize = require('sequelize');
const database = require('../../../config/db');

const Author = database.sequelize.define('Author', {
    id: {
        type: Sequelize.UUID,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
        field: 'codigo'
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
        field: 'nome'
    },
    biography: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'biografia'
    },
    birthDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        field: 'data_nascimento'
    }
}, {
    timestamps: false,
    tableName: 'tb_autor'
})

module.exports = Author;


//CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
//Criar extensao para gerar o uuid automaticamente

/* 
create table tb_autor (
	codigo uuid default uuid_generate_v1(),
	nome varchar(40),
	biografia varchar(100),
	data_nascimento date,
	primary key (codigo)
);
*/