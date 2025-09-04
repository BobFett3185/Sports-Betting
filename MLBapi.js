require("dotenv").config(); // loads .env into process.env
const fetch = require('node-fetch');

//store api key in the env file so no one takes it from github
const API_KEY  = process.env.MLBAPI;
const url = `https://api.sportradar.us/nfl/official/trial/v7/en/games/2024/REG/3/schedule.json?api_key=${API_KEY}`;

async function getMLBGames(){
    try{
        const response = await fetch(url); 
        const data = await response.json();

        console.log(JSON.stringify(data, null, 2));

    }
    catch(error){
        console.error("Error fetching data:", error);
    }

}