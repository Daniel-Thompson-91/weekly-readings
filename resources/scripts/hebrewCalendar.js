import {HebrewCalendar, HDate, Location, Event} from '@hebcal/core';

const options = {
  year: new Date().getFullYear(),
  isHebrewYear: false,
  location: Location.lookup('Dallas'),
  sedrot: true,
  omer: true,
};
const events = HebrewCalendar.calendar(options);

for (const ev of events) {
  const hd = ev.getDate();
  const date = hd.greg();
  console.log(date.toLocaleDateString(), ev.render('en'), hd.toString());
}

/* ./resources/scripts/hebrewCalendar.js */