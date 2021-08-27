const { operators, options, widthOptions, heigthOptions } = require('./constants/numberValues')

class NumberToLCD {
  constructor(receivedValues, width, height) {
    this.height = height;
    this.width = width;
    this.receivedValues = receivedValues;
    this.numbers = Array.from(String(this.receivedValues), Number);
    this.number = "";
  };

  withoutMeasures() {
    if (!isNaN(this.numbers[0])) {
      for (let i = 0; i < 3; i++) {
        let characters = '';

        for (let j = 0; j < this.numbers.length; j++) {
          const operation = operators[this.numbers[j]];
          characters += ` ${operation[i]} `;
        }
        this.number += characters + `\n`;
      };
    } else {
      console.log("The value entered is not a number!")
    }
  };

  measures() {
    if (!isNaN(this.numbers[0]) && !isNaN(this.width) && !isNaN(this.height)) {
      for (let i = 0; i < 5; i++) {

        if (i === 0 || i === 2 || i === 4) {
          let characters = '';
          for (let j = 0; j < this.numbers.length; j++) {
            const operator = options[this.numbers[j]];
            const operation = widthOptions[operator[i]];
            characters += ` ${operation(this.width)} `;
          }
          this.number += characters + `\n`;
        } else {
          let characters = '';
          for (let index = 0; index < this.height; index++) {

            for (let j = 0; j < this.numbers.length; j++) {
              const operator = options[this.numbers[j]];
              const operation = heigthOptions[operator[i]];
              characters += ` ${operation(this.width)} `;
            }
            this.number += characters + `\n`;
            characters = '';
          };
        };
      };
    } else {
      console.log("The value entered is not a number!")
    }
  };
};

module.exports = NumberToLCD;
