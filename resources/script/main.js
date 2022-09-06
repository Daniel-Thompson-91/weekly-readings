//retrieve 3 year reading plan data from json file
const weeklyReadings = require('../../json/readingPlan.json');

//get date info
const currentDate = new Date();
const currentWeekDay = currentDate.getDay();
const currentMonth = currentDate.getMonth();
const currentMonthDay = currentDate.getDate();

//reading plan date info
const readingPlanStartDate = new Date('March 22, 2020 6:00');
const currentReadingWeek = 0;

const reading1 = document.getElementById('reading1');
const reading2 = document.getElementById('reading2');
const reading3 = document.getElementById('reading3');