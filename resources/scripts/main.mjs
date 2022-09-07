//retrieve 3 year reading plan data from json file
import {weeklyReadings} from './readingPlan.mjs';

//get date info
const startDate = new Date('March 28, 2020');
const currentDate = new Date();
const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
const currentWeek = Math.ceil(days / 7);

//retrieve DOM elements to be changed dynamically
const reading1 = document.getElementById('reading1');
const reading2 = document.getElementById('reading2');
const reading3 = document.getElementById('reading3');

const setReading1 = () => {
  for (let i = 0; i < 143; i++) {
    if (weeklyReadings.weekNumber[i] === currentWeek) {
      reading1.innerHTML = weeklyReadings.reading1[i];
    }
  }
}

console.log(setReading1);