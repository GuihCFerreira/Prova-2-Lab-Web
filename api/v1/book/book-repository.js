const bookModel = require('./book-model');

const save = async (book ) => {
    return bookModel.create(book);
}

module.exports = {save}