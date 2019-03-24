module.exports = function getZerosCount(number, base) {
  let multiplierArr = [];
  let denominator = 2;
  let multiplierObj = {};
  let resultArr = [];
  while (base != 1) {
    if (base % denominator == 0) {
      base /= denominator;
      if (multiplierArr.indexOf(denominator) == -1) {
        multiplierArr.push(denominator);
      }
      multiplierObj.hasOwnProperty(denominator) ? multiplierObj[denominator]++ : (multiplierObj[denominator] = 1);
    } else {
      denominator++;
    }
  }
  for (let i = 0; i < multiplierArr.length; i++) {
    let currentDenominator = multiplierArr[i];
    let x = multiplierArr[i];
    let result = 0;
    while (number > currentDenominator) {
      result += Math.floor(number / currentDenominator);
      currentDenominator *= x;
    }
    resultArr.push(Math.floor(result / multiplierObj[x]));
  }
  return Math.min(...resultArr);
};
