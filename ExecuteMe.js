const NumberToLCD = require('./NumberToLCD');

const args = process.argv.slice(2);

if (args[1] && args[2]) {
  let numberToLCD = new NumberToLCD(args[0], args[1], args[2]);
  numberToLCD.measures();

  console.log(numberToLCD.number)
} else {
  let numberToLCD = new NumberToLCD(args[0], 0, 0);
  numberToLCD.withoutMeasures();

  console.log(numberToLCD.number)
}
