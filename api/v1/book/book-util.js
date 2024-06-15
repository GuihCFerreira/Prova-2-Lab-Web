const formatBook = (book) => {

    delete book.dataValues.authorId;
    delete book.dataValues.Author.dataValues.biography;
    delete book.dataValues.Author.dataValues.birthDate;

    return book;
}

module.exports = {formatBook}