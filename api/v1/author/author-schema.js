const Joi = require("joi");

const createAuthorSchema = {
    payload: Joi.object({
        name: Joi
                .string()
                .min(10)
                .max(40)
                .required(),
        biography: Joi
                .string()
                .min(15)
                .max(100)
                .required(),
        birthDate: Joi
                .string()
                .min(10)
                .max(10)
                .isoDate()
                .required(),
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

const deleteById = {
    params: Joi.object({
        id: Joi
            .string()
            .guid()
            .required()
    })
}

module.exports = {
    deleteById,
    getById,
    createAuthorSchema
}