const repository = require('./author-repository');

const save = async (author) => {
    return repository.save(author);
}

module.exports ={save}