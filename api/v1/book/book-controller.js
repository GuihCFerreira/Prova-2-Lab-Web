const business = require('./book-business');

const createBook = async (request, h) => {
    return h.response(await business.save(request.payload)).code(201);
}

module.exports= {createBook}