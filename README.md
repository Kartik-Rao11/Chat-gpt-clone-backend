# ChatGPT Clone

This is a ChatGPT clone project built with Node.js, Express, and MongoDB. The project provides a chat interface that allows users to interact with a chatbot powered by the Hugging Face API.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- Chat interface for user interaction
- Integration with the Hugging Face API for generating responses
- User authentication
- Swagger documentation for API endpoints

## Technologies Used

- **Node.js**: JavaScript runtime for the server
- **Express**: Web framework for building the API
- **MongoDB**: NoSQL database for storing user data and chat history
- **Swagger**: API documentation tool for defining and visualizing the API
- **Hugging Face APIs**: For Generating API responses.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Kartik-Rao11/Chat-gpt-clone-backend.git

2. Navigate to the project directory:
   ```bash
   cd Chat-gpt-clone-backend
3. Install dependencies:
    ```bash
    npm install
4. Create a .env file in the root directory and Copy the contents of the .env.example file to newly created .env file.
5. Start the Server
    ```bash
    npm start
The server should now be running on http://localhost:8080.

## API Documentation
API endpoints are documented using Swagger. After starting the server, you can access the documentation at http://localhost:8080/api/v1/swagger-ui

## Contributing
Contributions are welcome! If you have suggestions or improvements, please create a pull request.

## License
This project is licensed under the MIT License.
