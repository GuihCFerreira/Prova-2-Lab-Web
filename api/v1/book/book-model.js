const Sequelize = require('sequelize');
const database = require('../../../config/db');
const Author = require('../author/author-model');
const { defaultValueSchemable } = require('sequelize/lib/utils');

const Book = database.sequelize.define('Book', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
        field: 'codigo'
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false,
        field: 'titulo'
    },
    summary: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'resumo'
    },
    isbn: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'isbn'
    },
    publishedDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        field: 'data_publicacao'
    },
    authorId: {
        type: Sequelize.UUID,
        field: 'cod_autor',
        references: {
            model: 'Author',
            key: 'id'
        }
    }
}, {
    timestamps: false,
    tableName: 'tb_livro'
})


module.exports = Book;



//CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
//Criar extensao para gerar o uuid automaticamente

/* 
create table tb_livro (
	codigo uuid default uuid_generate_v1(),
	titulo varchar(40),
	resumo varchar(200),
	data_publicacao date,
	isbn varchar(13),
	cod_autor uuid,
	primary key (codigo),
	foreign key (cod_autor) references tb_autor(codigo) 
);
*/