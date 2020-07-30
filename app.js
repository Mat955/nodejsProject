//first Task

// // http://numbersapi.com/random/year?json

const fetch = require('node-fetch');

// const year = process.argv[2] || Math.floor(Math.random() * 2020);

// fetch(`http://numbersapi.com/${year}/year?json`)
//   .then(response => response.json())
//   .then(data => console.log(data.text))
//   .catch(error => console.log('Error in APP', error))

//Task [2]

// `http://numbersapi.com/${number}/${type}?json`

const arg = process.argv[2];
let type = "";

if (arg.indexOf('--year') === 0) {
  console.log('looking year....');
  type = "year";
} else if (arg.indexOf('--math') === 0) {
  console.log('looking info about number...')
  type = "math";
} else if (arg.indexOf('--trivia') === 0) {
  console.log('looking info about trivia....')
  type = "trivia";
}

const equalSign = arg.search('=');

if (equalSign === -1) console.log('you not put a number!');

const number = arg.slice(equalSign + 1) || 1900;

// if (number === '' || isNaN(Number(number))) {
//   console.log('its not a number!');
//   process.exit();
// }

fetch(`http://numbersapi.com/${number}/${type}?json`)
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('ohhhh something wrong: ' + response.status)
    }
  })
  .then(response => console.log(response.text))
  .catch(err => console.log('error', err));