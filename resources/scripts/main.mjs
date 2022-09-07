//retrieve 3 year reading plan data from json file
import {weeklyReadings} from './readingPlan.mjs';
console.log(weeklyReadings);
//get date info
const startDate = new Date('March 28, 2020');
const currentDate = new Date();
const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
const currentWeek = Math.ceil(days / 7);

/*const reading1InJson = weeklyReadings.reading1;
const reading2InJson = weeklyReadings.reading2;
const reading3InJson = weeklyReadings.reading3;

const reading1InApp = document.getElementById('reading1');
const reading2InApp = document.getElementById('reading2');
const reading3InApp = document.getElementById('reading3');*/