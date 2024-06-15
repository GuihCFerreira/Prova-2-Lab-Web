const schema = require('./author-schema');
const controller = require('./author-controller');

const plugin = {
    name: 'autho-v1-route',
    version: '1',
    register: (server) => {
        server.route([
            {
                method: "GET",
                path: "/v1/authors",
                options: {
                    tags: ['api'],
                    description: 'List of authors',
                    handler: controller.getAll
                }
            },
            {
                method: "GET",
                path: "/v1/authors/{id}",
                options: {
                    tags: ['api'],
                    description: 'Get a specific author',
                    handler: controller.getById,
                    validate: schema.getById
                }
            },
            {
                method: "POST",
                path: "/v1/authors",
                options: {
                    tags: ['api'],
                    description: 'Create a author',
                    handler: controller.createAuthor,
                    validate: schema.createAuthorSchema
                }
            },
            {
                method: "DELETE",
                path: "/v1/authors/{id}",
                options: {
                    tags: ['api'],
                    description: 'Delete a specific author',
                    handler: (request, h) => {return h.code(204)},
                    validate: schema.deleteById
                }
            }
        ])
    }
};

module.exports = plugin;