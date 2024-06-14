const Joi = require("joi");

const createBookSchema = {
    payload: Joi.object({
        title: Joi
                .string()
                .min(5)
                .max(40)
                .required(),
        summary: Joi
                .string()
                .min(15)
                .max(200)
                .required(),
        isbn: Joi
                .string()
                .min(13)
                .max(13)
                .required(),
        publishedDate: Joi
                .string()
                .min(10)
                .max(10)
                .isoDate()
                .required(),
        authorId: Joi
                .string()
                .guid()
                .required()
    })
};

const getById = {
    params: Joi.object({
        id: Joi
            .string()
            .guid()
            .required()
    })
}

const getBooks = {
    query: Joi.object({
        title: Joi
            .string()
            .min(3),
        'author.name': Joi
            .string()
            .min(3)
    })
}

module.exports = {
    getById,
    createBookSchema,
    getBooks
}