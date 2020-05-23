export function romanNumeralConverter(string) {
  console.log('test', string);
  var result = 0;
  while(string.length) {
    if (string[0] === 'I') {
      if (string[0 + 1] === 'X') {
        result += 9;
        string = string.slice(2);
      } else if (string[0 + 1] === 'V') {
        result += 4;
        string = string.slice(2);
      } else {
        result += 1;
        string = string.slice(1);
      }
    } else if (string[0] === 'V') {
      result += 5;
      string = string.slice(1);
    } else if (string[0] === 'X') {
      if (string[0 + 1] === 'L') {
        result += 40;
        string = string.slice(2);
      } else if (string[0 + 1] === 'C') {
        result += 90;
        string = string.slice(2);
      } else {
        result += 10;
        string = string.slice(1);
      }
    } else if (string[0] === 'L') {
      result += 50;
      string = string.slice(1);
    } else if (string[0] === 'C') {
      if (string[0 + 1] === 'D') {
        result += 400;
        string = string.slice(2);
      } else if (string[0 + 1] === 'M') {
        result += 900;
        string = string.slice(2);
      } else {
        result += 100;
        string = string.slice(1);
      }
    } else if (string[0] === 'D') {
      result += 500;
      string = string.slice(1);
    } else {
      result += 1000;
      string = string.slice(1);
    }
  }
  return result;
};

export function validateRomanNumerals(string) {
  const romanNumerals = { I: 'I', V: 'V', X: 'X', L: 'L', C: 'C', D: 'D', M: 'M' };
  var result = '';
  for (var i = 0; i < string.length; i++) {
    if (romanNumerals[string[i]]) {
      console.log('validate', string[i])
    }
  }
};