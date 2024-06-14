const business = require('./author-business');

const createAuthor = async (request, h) => {
    return h.response(await business.save(request.payload)).code(201);
}

module.exports = {createAuthor}