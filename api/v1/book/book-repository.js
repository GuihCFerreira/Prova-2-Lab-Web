const {Op} = require('sequelize');
const {Author, Book} = require('../associations/associations-model')

const save = async (book ) => {
    return Book.create(book);
}

const getById = async (id) => {
    return Book.findOne({
        include: [ {
            model: Author,
            required: true
        }],
        where: {
            id: id
        }
    })
}

const getAll = async (filter) => {

    const {title} = filter;
    const authorName = filter['author.name'];

    return Book.findAll({
        include: [ {
            model: Author,
            required: true
        }],
        
        where: {
            ...(title) ? {title: {[Op.iLike]: `%${title}%`}} : {},
            ...(authorName) ? {'$Author.nome$': {[Op.iLike]: `%${authorName}%`}} : {}
        }
    })
}

module.exports = {save, getById, getAll}