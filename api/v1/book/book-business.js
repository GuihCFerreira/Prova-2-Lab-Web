const repository = require('./book-repository');

const save = async (book) =>{
    return repository.save(book);
}

module.exports = {save}