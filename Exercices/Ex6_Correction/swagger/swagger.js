const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./router/*.js'], // files containing annotations as above
};

const apiSpec = swaggerJsdoc(options);

module.exports = apiSpec;
