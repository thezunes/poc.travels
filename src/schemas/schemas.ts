import joi from 'joi';

const travels = joi.object({
    id: joi.string().min(3).required(),
    destination: joi.string().required(),
    date: joi.number().min(7).required(),
    status: joi.string().required()
});

export {travels};