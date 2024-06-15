const formatAuthor = (author) => {
    
    if (author.dataValues.books.length > 0 ){
        author.dataValues.books.map((book) => {
            delete book.dataValues.authorId;
            delete book.dataValues.publishedDate;
            delete book.dataValues.isbn;
            delete book.dataValues.summary;

        })
    }
    
    return author;
}

module.exports = {formatAuthor}