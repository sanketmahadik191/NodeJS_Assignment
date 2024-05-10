# Random Image Fetcher API

This project is a simple API built using Express.js and Axios to fetch a random image from the Unsplash API and resize it based on user-defined dimensions.

## Result 
  ![image](https://github.com/sanketmahadik191/NodeJS_Assignment/assets/125791466/317f52f6-4347-4378-82fb-d370d0bde8c3)


## Functionality

The project consists of the following components:

1. **Express Server Setup**
   - The Express server is set up to listen on port 4002.
   - When the server starts, a message "Express Server Started" is logged to the console.

2. **Image Fetching Function**
   - The `fetchImage` function is an asynchronous function that uses Axios to fetch a random image from the Unsplash API.
   - The function returns the URL of the regular-sized image.

3. **GET Endpoint for Random Image**
   - There is a GET endpoint `/api/images/random` that clients can access to get a random image.
   - When a request is made to this endpoint, the server fetches a random image using the `fetchImage` function.
   - The image is resized based on user-defined dimensions (width and height).
   - The resized image is sent back as a response with the appropriate content type (`image/jpeg`).

## Usage

To use this API, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Start the server using `npm start`.
4. Access the endpoint `http://localhost:4002/api/images/random` to get a random image.

## Challenges Encountered

During the development process, the following challenges were encountered:

1. **Handling Image Resizing**
   - One of the challenges was to resize the fetched image based on user-defined dimensions.
   - This was achieved by modifying the image URL with width and height parameters before fetching the image.

2. **Error Handling**
   - Ensuring proper error handling, especially when fetching images or encountering internal server errors, required careful consideration.
   - Error handling was implemented using try-catch blocks and appropriate status codes in the API responses.

3. **Content-Type Headers**
   - Setting the correct `Content-Type` header for image responses to ensure proper rendering in clients was an important aspect.

## Conclusion

This project demonstrates how to create a simple API to fetch and resize random images. It utilizes Express.js for server setup, Axios for making HTTP requests, and implements error handling to ensure smooth functioning.
