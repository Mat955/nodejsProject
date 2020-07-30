// http://numbersapi.com/random/year?json

const fetch = require('node-fetch');

const year = process.argv[2] || Math.floor(Math.random() * 2020);

fetch(`http://numbersapi.com/${year}/year?json`)
  .then(response => response.json())
  .then(data => console.log(data.text))
  .catch(error => console.log('Error in APP', error))

