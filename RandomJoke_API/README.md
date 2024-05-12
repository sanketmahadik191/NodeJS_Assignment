# Random Joke And Image API with Express.js

## Introduction

This project aims to create a simple API using Node.js and Express.js to fetch random jokes from the "icanhazdadjoke" API and random image from "unplash". The API endpoint `/api/jokes/random` is implemented to provide users with a random joke upon request. This documentation outlines the functionality of each component of the project and highlights any challenges encountered during the development process.

## Setup and Initialization

### Node.js Project Setup

1. **Dependencies**: The project utilizes Node.js and npm (Node Package Manager) for package management.
   
2. **Express.js Installation**: Express.js is installed as a dependency to create the server and define routes.

### Initialization

The project is initialized by creating the necessary directory structure and setting up the `package.json` file to manage dependencies.

## Express.js Integration

Express.js is used to create a server and define routes for the API endpoints.

1. **Server Initialization**: The Express server is initialized on a specified port (in this case, port 4001).

2. **Route Definition**: The `/api/jokes-and-image/random` route is defined to handle GET requests for fetching random jokes. Upon receiving a request, the server calls the `fetchJoke()`,`fetchImage()` function to fetch a random joke,image and returns it as a JSON response.

## Implementation of /api/jokes/random Route

1. **Fetching Random Jokes**:The `fetchJoke()` function is implemented using Axios to make an HTTP GET request to the "icanhazdadjoke" API. The response containing the random joke is returned to the calling function.
2.  **Fetching Random Image()**:The `fetchImage()` function is implemented using Axios to make an HTTP GET request to the "unplash" API. The response containing the random image is returned to the calling function.

3. **Error Handling**: Error handling is implemented using try-catch blocks to catch any errors that may occur during the fetching process. In case of an error, an appropriate error message is returned to the client.

## Functional Testing

Functional testing of the API endpoints can be performed using tools like Postman or similar HTTP client applications. The `/api/jokes-and-image/random` endpoint can be tested by sending GET requests to the server and verifying that random jokes are returned in the response.

![image](https://github.com/sanketmahadik191/NodeJS_Assignment/assets/125791466/c231ca72-2596-47ec-a2fd-2d0fca90cab0)



## Challenges Encountered

1. **Handling Asynchronous Operations**: Managing asynchronous operations in Node.js, especially when making HTTP requests, required careful handling of promises and async/await syntax.

2. **Error Handling**: Implementing robust error handling mechanisms to gracefully handle errors and provide informative error messages to clients posed a challenge.

3. **Testing**: Ensuring the proper functioning of API endpoints and conducting thorough testing using Postman required meticulous attention to detail.

## Conclusion

In conclusion, this project successfully implements a simple API using Node.js and Express.js to fetch random jokes and image from an external API. By following the outlined documentation, developers can understand the functionality of each component and effectively test the API endpoints. Additionally, the project documentation provides insights into the challenges encountered during the development process and how they were addressed.
