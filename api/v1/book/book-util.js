const formatBook = (book) => {

    delete book.dataValues.authorId;
    delete book.dataValues.Author.dataValues.biography;
    delete book.dataValues.Author.dataValues.birthDate;
    book.dataValues.author = book.dataValues.Author.dataValues;
    delete book.dataValues.Author.dataValues

    return book;
}

module.exports = {formatBook}