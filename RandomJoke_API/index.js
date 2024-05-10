const express = require("express");
const axios = require("axios");
const PORT = 4001;
const server = express();
const fs = require('fs');

server.listen(PORT, () => {
  console.log('Express Server Started');
});

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

server.get("/api/jokes/random", async (request, response) => {
  try {
    const jokeData = await fetchJoke();
    const jokesData = "\n"+jokeData;
    fs.appendFileSync('randomJoke.txt',jokesData)
    response.status(200).json(jokeData);
  } catch (err) {
    console.log("Error_Occured -" + err);
    response.status(500).send("Internal Server Error");
  }
});

server.use((req,res)=>{
    console.error(err.stack);
    res.status(500).send('Check Url');
})
