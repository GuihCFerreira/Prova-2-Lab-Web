const repository = require('./author-repository');
const {formatAuthor} = require('./author-util')

const save = async (author) => {
    return repository.save(author);
}

const getById = async (id) => {
    const author = await repository.getById(id)
    if(author) return formatAuthor(author)
    else return null
}

const getAll = async ()=> {
    const authors = await repository.getAll()
    if(authors.length > 0 ) return authors.map((author) => formatAuthor(author))
    else return null
}

module.exports ={save, getById, getAll}