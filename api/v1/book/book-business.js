const repository = require('./book-repository');
const {formatBook} = require('./book-util');

const save = async (book) =>{
    return repository.save(book);
}

const getById = async (id) => {
    const book =await repository.getById(id);
    if(book) return formatBook(book);
    else return null
}

const getAll = async (filter) => {
    const books = await repository.getAll(filter)
    if(books.length > 0) return books.map((book) => formatBook(book))
    else return null
}

module.exports = {save, getById, getAll}

