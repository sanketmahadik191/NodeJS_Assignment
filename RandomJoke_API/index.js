const express = require("express");
const axios = require("axios");
const PORT = 4001;
const server = express();
const fs = require('fs');

server.listen(PORT, () => {
  console.log('Express Server Started');
});

const imageApiUrl = "https://api.unsplash.com/photos/random/?client_id=jLMgXFSkBJENfOVcpxSjLhM8gQTirHBn738AQQyGQMg";
const url = 'https://icanhazdadjoke.com/';
const headers= {
    "Accept": "text/plain"  
    }


const fetchJoke = async () => {
  try {
    const response = await axios.get(url,{headers});
    console.log("Random Joke - "+response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}


const fetchImage = async () => {
  try {
      const response = await axios.get(imageApiUrl);
      return response.data.urls.regular;
  } catch (error) {
      console.error(error);
      throw error;
  }
};

server.get("/api/jokes-and-image/random", async (request, response) => {
  try {
    const jokeData = await fetchJoke();
    const imageUrl = await fetchImage();
    
    const width = 301;
    const height = 400;

    const modifiedImageUrl = `${imageUrl}&w=${width}&h=${height}`;

    fs.appendFileSync('randomJoke.txt', jokeData + "\n");
    fs.writeFileSync('randomImage.jpg', await axios.get(modifiedImageUrl, { responseType: 'arraybuffer' }).then(res => res.data));

    const responseData = {
      jokeData,
      modifiedImageUrl
    };

    response.status(200).json(responseData);

  } catch (err) {
    console.log("Error_Occured -" + err);
    response.status(500).send("Internal Server Error");
  }
});


server.get("/api/images/random", async (request, response) => {
  try {
      const imageUrl = await fetchImage();

      const width = 301;
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

server.use((req, res) => {
  res.status(404).send("Not Found");
});
