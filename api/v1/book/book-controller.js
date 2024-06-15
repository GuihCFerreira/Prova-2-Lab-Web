const business = require('./book-business');

const createBook = async (request, h) => {

    try {
        return h.response(await business.save(request.payload)).code(201);
    } catch (error) {
        console.log(error);
    }

}

const getById = async (request, h) => {
    try {
        const id =request.params.id;
        const book = await business.getById(id);
        return book !== null ?  h.response(book).code(200):  h.response().code(404)
        
    } catch (error) {
        console.log(error);
    }
}

const getAll = async (request, h) => {
    try {
        const book = await business.getAll(request.query);
        return book !== null ?  h.response(book).code(200):  h.response().code(404)
    } catch (error) {
        console.log(error);
    }
}

module.exports= {createBook, getById, getAll}