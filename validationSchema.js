import baseJoi from "joi";
import sanitizeHtml from "sanitize-html";

const extension = (Joi) => ({
    type : 'string',
    base : Joi.string(),
    messages : {
      'string.escapeHTML' : '{{#label}} must not include HTML!'
    },
    rules: {
      escapeHTML: {
        validate(value, helpers){
          const clean = sanitizeHtml(value,{
            allowedTags : [],
            allowedAtrributes: {},
          });
          if (clean !== value) return helpers.error('string.escapeHTML', {value})
            return clean;
        }
      }
    }
  })

  const Joi = baseJoi.extend(extension);

export const campgroundSchema = Joi.object({
    campgrounds: Joi.object({
      title: Joi.string().required().escapeHTML(),
      location: Joi.string().required().escapeHTML(),
      // image: Joi.string().required(),
      description: Joi.string().required().escapeHTML(),
      price: Joi.number().required().min(0),
    }).required(),
    deleteImages: Joi.array()
  });

 export const reviewSchema = Joi.object({
    review: Joi.object({
      rating: Joi.number().required().min(1).max(5),
      body: Joi.string().required().escapeHTML()
    }).required()
  })
  



  