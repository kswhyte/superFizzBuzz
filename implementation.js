function superFizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0 && n % 7 === 0) {
    return 'SuperFizzBuzz';
  } else if (n % 3 === 0 && n % 7 === 0) {
    return 'SuperFizz';
  } else if (n % 5 === 0 && n % 7 === 0) {
    return 'SuperBuzz';
  } else if (n % 3 === 0 && n % 5 === 0) {
    return 'FizzBuzz';
  } else if (n % 3 === 0) {
    return 'Fizz';
  } else if (n % 5 === 0) {
    return 'Buzz';
  } else {
    return n;
  }
}
