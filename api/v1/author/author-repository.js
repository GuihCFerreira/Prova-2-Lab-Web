const authorModel = require('./author-model');

const save = async (author) => {
    return authorModel.create(author);
}

module.exports = {save}