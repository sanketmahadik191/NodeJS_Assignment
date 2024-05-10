const express = require("express");
const axios = require("axios");
const PORT = 4002;
const server = express();
const fs = require("fs");

const imageApiUrl = "https://api.unsplash.com/photos/random/?client_id=jLMgXFSkBJENfOVcpxSjLhM8gQTirHBn738AQQyGQMg";

server.listen(PORT, () => {
    console.log('Express Server Started');
});

const fetchImage = async () => {
    try {
        const response = await axios.get(imageApiUrl);
        return response.data.urls.regular;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

server.get("/api/images/random", async (request, response) => {
    try {
        const imageUrl = await fetchImage();

        const width = 300;
        const height = 400;

        const modifiedImageUrl = `${imageUrl}&w=${width}&h=${height}`;

        response.setHeader('Content-Type', 'image/jpeg');

        const imageResponse = await axios.get(modifiedImageUrl, { responseType: 'arraybuffer' });
        fs.writeFileSync('randomImage.jpg', imageResponse.data);

        response.status(200).send(imageResponse.data);
    } catch (err) {
        console.log("Error occurred - " + err);
        response.status(500).send("Internal Server Error");
    }
});
