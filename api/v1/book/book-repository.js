const bookModel = require('./book-model');
const Author = require('../author/author-model')
const {Op} = require('sequelize');

const save = async (book ) => {
    return bookModel.create(book);
}

const getById = async (id) => {
    return bookModel.findOne({
        include: [ {
            model: Author,
            required: false
        }],
        where: {
            id: id
        }
    })
}

const getAll = async (filter) => {

    const {title} = filter;
    const authorName = filter['author.name'];

    return bookModel.findAll({
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