/**
 * Created by Wayuki on 03-Mar-17.
 */
const Joi = require('joi');

const email = Joi.string().trim().email().required().label('Email').options({
  language: {
    string: {
      email: 'Your {{key}}\'s format is invalid. Please try again.',
    },
  },
});
const password = Joi.string().trim().min(6).max(30).required().label('Password');
const confirmPassword = Joi.string().trim().min(6).max(30).valid(Joi.ref('password')).required().label('Confirm Password').options({
  language: {
    any: {
      allowOnly: '!!It does not match with your password. Please try again.',
    },
  },
});
const playerName = Joi.string().trim().min(4).max(15).required().label('Player Name');
const recaptcha = Joi.string().min(1).required().label('Recaptcha').options({
  language: {
    string: {
      min: '!!Are you a robot!? Please verify yourself!',
    },
  },
});

module.exports = {
  options: {
    abortEarly: false,
    convert: true,
    allowUnknown: false,
    stripUnknown: true,
    language: {
      any: {
        required: '{{key}} is required for registration. Please try again.',
      },
    },
  },
  signUp: {
    email,
    password,
    confirmPassword,
    playerName,
    recaptcha,
  },
};
