import Joi from 'joi'

export const ValidatormusicDto = Joi.object({//validation for music
   // Id: Joi.string().min(1).max(50).required(),
    title: Joi.string().min(1).max(50).required(),
    artist: Joi.string().min(1).max(70),
    album: Joi.string().min(1).max(70),  
    genre: Joi.string().min(1).max(70)

})