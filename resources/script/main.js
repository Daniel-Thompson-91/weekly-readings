//retrieve 3 year reading plan data
const weeklyReadings = require('../../json/readingPlan.json');

//get date info
const currentDate = new Date();
const currentWeekDay = currentDate.getDay();
const currentMonth = currentDate.getMonth();
const currentMonthDay = currentDate.getDate();


const reading1 = document.getElementById('reading1');
const reading2 = document.getElementById('reading2');
const reading3 = document.getElementById('reading3');

const setWeek = (week) => {
  
};