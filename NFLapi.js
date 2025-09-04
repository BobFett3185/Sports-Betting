/*
How Calling an API Works in JavaScript:
Create an async function so you can use await inside it.
This allows your code to pause until certain operations (like fetching data) are complete.

Define the API URL you want to request data from.
This is often the base URL plus some query parameters like team name, event ID, etc.

Use fetch(url) to make the GET request, and await the response:

const response = await fetch(url);
Convert the response to a JSON object, which gives you real, usable data:

const data = await response.json();
Access and use the data (e.g., log it, display it on a webpage, use it in your betting logic, etc.):
console.log(data);
*/
require("dotenv").config(); // loads .env into process.env

const fetch = require('node-fetch');


const API_KEY  = process.env.NFLAPI;
const url = `https://api.sportradar.us/nfl/official/trial/v7/en/games/2024/REG/3/schedule.json?api_key=${API_KEY}`;

const func = async () => {
}


//hi
async function getNFLGames() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // Access the array of games
    const games = data.week.games;

    // Loop through each game and print the info
    for (const game of games){
      console.log(`${game.home.name} vs ${game.away.name}`);
      console.log(`Final Score: ${game.home.name} ${game.scoring.home_points} - ${game.scoring.away_points} ${game.away.name}`);
    }


  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getNFLGames();

/*With TheSportsDB (or any REST API), the flow is usually:
Build the full API URL (base URL + endpoint + parameters)
Send a GET request to that URL
Receive the JSON response
Parse and use the data in your app
*/