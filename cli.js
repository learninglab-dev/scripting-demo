#!/usr/bin/env node

var moment = require('moment');
var theDate = moment().format('YYYYMMDD-HH:mm:ss.SSS');

console.log(`cli.js just got launched!`);
console.log(`the date and time are ${theDate}`);
