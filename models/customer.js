const Joi = require('joi');
const mongoose = require('mongoose');

const Customer = mongoose.model('Customer', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        trim: true
    },
    phoneFlash:{
        type: String,
        required: true,
        minlength: 1,
        maxlength: 10,
        trim: true
    },
    phonePortability: {
        type: String,        
        minlength: 1,
        maxlength: 10,
        trim: true
    },
    stateActivation: {
        type: Boolean,
        default: false
    },
    portability: {
        type: Boolean,
        default: false
    }
}));

function validateCustomer(customer) {
    const schema = {
      name: Joi.string().min(5).max(255).required(),
      phoneFlash: Joi.string().min(1).max(10).required(),
      phonePortability: Joi.string().min(1).max(10),
      stateActivation: Joi.boolean(),
      portability: Joi.boolean()
    };
  
    return Joi.validate(customer, schema);
  }
  
  exports.Customer = Customer; 
  exports.validate = validateCustomer;