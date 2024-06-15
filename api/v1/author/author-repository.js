const {Book, Author} = require('../associations/associations-model');

const save = async (author) => {
    return Author.create(author);
}

const getById = async (id) => {
    return Author.findOne({
        include: [ {
            model: Book,
            required: false,
            as: 'books'
        }],
        where: {
            id: id
        }
    })
}

const getAll = async ()=> {
    return Author.findAll({
        include: [ {
            model: Book,
            required: false,
            as: 'books'
        }]
    });
}

module.exports = {save, getById, getAll}