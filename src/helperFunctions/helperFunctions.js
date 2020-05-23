export function romanNumeralConverter(string) {
  console.log('test', string);
  var result = 0;
  while(string.length) {
    if (string[0] === 'I') {
      if (string[0 + 1] === 'X') {
        result += 9;
        string = string.slice(2);
      } else if (s[0 + 1] === 'V') {
        result += 4;
        string = string.slice(2);
      } else {
        result += 1;
        string = string.slice(1);
      }
    }
  }
  return result;
};

