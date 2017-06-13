
// // fib sequence goes odd even, then: odd odd even, odd odd even, etcetera.

// // Expanding sum of even fibs is thus:
// 2
// 2+8 = 2 + 3 + 5 = 2 + 3 + 2 + 3
// 2+8+34 = 2 + 3 + 5 + 13 + 21 = 2 + 3 + 5 + 3 + 5 + 5 + 5 + 8 + 8
// 2+8+34+144 = 2 + 3 + 5 + 13 + 21 + 55 + 89 = 2 + 3

// // ok no

// Fib(2) + Fib(5) = Fib(2) + Fib(3) + Fib(4)
// Fib(2) + Fib(5) + Fib(8) = Fib(2) + Fib(3) + Fib(4) + Fib(6) + Fib(7)
// Etc.

// So basically, add all Fibs starting at Fib(1) whose value is under 4 milllion except for all Fib(5+3i) where i is any integer 0 or greater.

// So exclue all Fib(i) where i > 2 and (i-2) % 3 == 0

var fib = function(n) {
  if (n == 1) return 1;
  if (n == 2) return 2;
  else return fib(n-2) + fib(n-1);
}

var fibEvenSum = function(limit) {
  var start = new Date().getTime();
  sum = 0;
  var i = 2;
  while (fib(i) < limit) {
    if (i == 2 || (i-2) % 3 != 0) {
      sum += fib(i);
    }
    i++;
  }
  var stop = new Date().getTime();
  console.log(stop-start);
  return sum;

}

// solved in 14.5 minutes
// takes 3589 milliseconds to run

