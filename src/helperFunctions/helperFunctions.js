export function numberToNumeralConverter(number) {
  var result = '';
  while(number) {
    if (number >= 1 && number <= 3) {
      result += 'I';
      number--;
    } else if (number === 4) {
      result += 'IV';
      number -= 4;
    } else if (number >= 5 && number <= 8) {
      result += 'V';
      number -= 5;
    } else if (number === 9) {
      result += 'IX';
      number -= 9;
    } else if (number >= 10 && number <= 39) {
      result += 'X';
      number -= 10;
    } else if (number >= 40 && number <= 49) {
      result += 'XL';
      number -= 40;
    } else if (number >= 50 && number <= 89) {
      result += 'L';
      number -= 50;
    } else if (number >= 90 && number <= 99) {
      result += 'XC';
      number -= 90;
    } else if (number >= 100 && number <= 399) {
      result += 'C';
      number -= 100;
    } else if (number >= 400 && number <= 499) {
      result += 'CD';
      number -= 400;
    } else if (number >= 500 && number <= 899) {
      result += 'D';
      number -= 500;
    } else if (number >= 900 && number <= 999) {
      result += 'CM';
      number -= 900;
    } else if (number >= 1000 && number <= 3999) {
      result += 'M';
      number -= 1000;
    }
  }
  return result;
}

export function romanNumeralConverter(string) {
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

export function validateNumber(number) {
  if (typeof number === 'number') {
    if (number > 0 && number <= 3999) {
      return true;
    }
  }
  return false;
};

export function validateRomanNumerals(string) {
  const romanNumerals = { I: 'I', V: 'V', X: 'X', L: 'L', C: 'C', D: 'D', M: 'M' };
  var result = '';
  for (var i = 0; i < string.length; i++) {
    if (romanNumerals[string[i]]) {
      result += string[i];
    }
  }
  return result.length === string.length ? true : false;
};