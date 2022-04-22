const array1 = [9, 'abc', new Date('22 april 2022 14:12:00 UTC')];
const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);


//9,abc,4/22/2022, 2:12:00 PM
