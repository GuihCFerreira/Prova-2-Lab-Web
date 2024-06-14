const schema = require('./author-schema');

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
                    handler: (request, h) => {return h.response({'authors':'Get all authors'}).code(200)}
                }
            },
            {
                method: "GET",
                path: "/v1/authors/{id}",
                options: {
                    tags: ['api'],
                    description: 'Get a specific author',
                    handler: (request, h) => {return h.response({'authors':'Get specific author'}).code(200)},
                    validate: schema.getById
                }
            },
            {
                method: "POST",
                path: "/v1/authors",
                options: {
                    tags: ['api'],
                    description: 'Create a author',
                    handler: (request, h) => {return h.response({'authors':'Create a author'}).code(201)},
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