const swaggerJSDoc = require("swagger-jsdoc");
const port = process.env.PORT || 8080;
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Chat-GPT API",
      version: "1.0.0",
      description: "API documentation for Chat-GPT project",
    },
    servers: [
      {
        url: `http://localhost:${port}`, // Replace with your actual server URL
      },
    ],
  },
  apis: ["./routes/*.js"],
   // Define the path to your route files
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
