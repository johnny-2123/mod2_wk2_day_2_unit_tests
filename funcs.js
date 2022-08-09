function isFive(num) {
  // Your code here
  if (num === 5) {
    return true;
  }
  return false
}

function isOdd(number) {
  // Your code here
  if (typeof number !== 'number') {
    throw new Error('number argument is not a number')
  }
  else {
    if (number % 2 === 0) {
      return false;
    }
    return true;
  }
}

function myRange(min, max, step = 1) {
  // Your code here
  if (step === 1) {
    let arr = [];
    while (min <= max) {
      arr.push(min);
      min++;
    }

    return arr;
  }
  else {
    let arr = [];
    while (min <= max) {
      arr.push(min);
      min += step;
    }
    return arr;
  }
}


module.exports = { isFive, isOdd, myRange };
