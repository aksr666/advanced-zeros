module.exports = function getZerosCount(number, base) {
  let crBase = base;
  let primePows = [];
  let prime = 2;
  let obj = {prime: 0};
  let arr= [];
    while(crBase != 1){
      if(crBase % prime == 0){
        crBase /= prime;
        primePows.push(prime);
        if(!obj.hasOwnProperty(prime)){
          obj[prime] = 0;
        };
        if(obj.hasOwnProperty(prime)){
          obj[prime]++;
        }
      }
      else{
        prime++;
      }
    }
    for (let i = 0; i < primePows.length; i++) {
      let pow = primePows[i];
      let exp = primePows[i];
      let tempResult = 0;
        while(number > pow){
        tempResult += Math.floor(number / pow);
        pow *= exp;
      }
      arr.push(Math.floor(tempResult / obj[exp]));     
    }
    let result = Math.min.apply('', arr);
    return result;
}