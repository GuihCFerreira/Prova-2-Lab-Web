const business = require('./author-business');

const createAuthor = async (request, h) => {
    try {
        return h.response(await business.save(request.payload)).code(201);
    } catch (error) {
        console.log(error);
    }
}

const getById = async (request, h) => {
    try {
        const author = await business.getById(request.params.id);
        if(author) return h.response(author).code(200);
        else return h.response().code(404)
    } catch (error) {
        console.log(error);
    }
}

const getAll = async (request, h) => {
    try {
        const authors = await business.getAll()
        if(authors.length > 0) return h.response(authors).code(200);
        else return h.response().code(404)
    } catch (error) {
        console.log(error);
    }
}

const deleteAuthor = async (request, h)=>{
    try {
        const author = await business.deleteAuthor(request.params.id)
        switch(author){
            case 404:
                return h.response().code(404)
            case 409:
                return h.response({message: "The author has books associated with him"}).code(409)
            default:
                return h.response().code(204)
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {createAuthor, getById, getAll, deleteAuthor}