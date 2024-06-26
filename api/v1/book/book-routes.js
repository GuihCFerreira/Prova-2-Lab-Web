const schema = require('./book-schema');
const controller = require('./book-controller');

const plugin = {
    name: 'book-v1-route',
    version: '1',
    register: (server) => {
        server.route([
            {
                method: "GET",
                path: "/v1/books",
                options: {
                    tags: ['api'],
                    description: 'List of books',
                    handler: controller.getAll,
                    validate: schema.getBooks
                }
            },
            {
                method: "GET",
                path: "/v1/books/{id}",
                options: {
                    tags: ['api'],
                    description: 'Get a specific book',
                    handler: controller.getById,
                    validate: schema.getById
                }
            },
            {
                method: "POST",
                path: "/v1/books",
                options: {
                    tags: ['api'],
                    description: 'Create a book',
                    handler: controller.createBook,
                    validate: schema.createBookSchema
                }
            }
        ])
    }
};

module.exports = plugin;