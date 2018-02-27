module.exports = function getZerosCount(number) {
  // your implementation
  var res = 0;
  while(number > 0) {
  n = Math.floor(n/5);
  res += n;
  }
  return res;
}
