const Book = require('../book/book-model');
const Author = require('../author/author-model')

Author.hasMany(Book, {foreignKey:"authorId", as: "books"})
Book.belongsTo(Author, {foreignKey: 'authorId'})

module.exports={Author, Book}