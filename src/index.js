module.exports = function getZerosCount(number) {
  // your implementation
  var res = 0;
  while(number > 0) {
  number = Math.floor(number/5);
  res += number;
  }
  return res;
}
