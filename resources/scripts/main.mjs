const fs = require('fs');

let readingPlan;

//get date info
const startDate = new Date('March 28, 2020');
const currentDate = new Date();
const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
const currentWeek = Math.ceil(days / 7);

//retrieve DOM elements to be changed dynamically
const reading1 = document.getElementById('reading1');
const reading2 = document.getElementById('reading2');
const reading3 = document.getElementById('reading3');

//read json and set reading1, reading2, and reading3 innerHTML
fs.readFile('https://github.com/Daniel-Thompson-91/weekly-readings/blob/main/json/readingPlan.json', 'utf8', (err, jsonData) => {
  if (err) throw err;
  readingPlan = JSON.parse(jsonData);

  for (let i = 0; i < readingPlan.length; i++) {
    if (readingPlan[i].weekNumber === currentWeek) {
      reading1.innerHTML = readingPlan[i].reading1;
      reading2.innerHTML = readingPlan[i].reading2;
      reading3.innerHTML = readingPlan[i].reading3;
    }
  }
})