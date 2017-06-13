// Silly easy. Took about 5 minutes if that.
// Ran real fast.

var sumSquareDifference = function(n) {
  var sumOfSquares = 0;
  var squareOfSums = 0;
  for (var i = 1; i <= n; i++) {
    sumOfSquares += i*i;
    squareOfSums += i;
  }
  squareOfSums = squareOfSums*squareOfSums;
  return Math.abs(sumOfSquares - squareOfSums);
};