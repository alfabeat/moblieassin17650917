import Joi from 'joi'

export const ValidatormusicDto = Joi.object({
    title: Joi.string().min(1).max(50).required()
})