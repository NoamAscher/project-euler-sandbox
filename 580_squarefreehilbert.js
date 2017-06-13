// A Hilbert number is any positive integer of the form 4k+1 for integer k≥0. We shall define a squarefree Hilbert number as a Hilbert number which is not divisible by the square of any Hilbert number other than one. For example, 117 is a squarefree Hilbert number, equaling 9×13. However 6237 is a Hilbert number that is not squarefree in this sense, as it is divisible by 9^2. The number 39693969 is also not squarefree, as it is divisible by both 9^2 and 21^2.

// There are 23271922327192 squarefree Hilbert numbers below 10^7.
// How many squarefree Hilbert numbers are there below 10^16?


// Method 1: Brute Iterative method:
//   - squarefreecount = 0
//   - for each Hilbert Number H_outer above H(0) and below X:
//     innerloop = true
//     - for each Hilbert Number H_inner above H(0) and below H_outer:
//       - if H_outer % H_inner^2 == 0
//         - innerloop = false
//         - break inner for loop
//     - if innerloop true, add a squarefreecount += 1.


var squareFreeCount = 0;
for (var h_outer = 5; h_outer < Math.pow(10, 3); h_outer += 4) {
  var innerLoop = true;
  for (var h_inner = 5; h_inner < h_outer; h_inner += 4) {
    if (h_outer % Math.pow(h_inner, 2) == 0) {
      innerLoop = false;
      break;
    }
  if (innerLoop == true) squareFreeCount++;
  }
}
console.log(squareFreeCount);


// Method 2:

// For any hilbert number y that isn't square free,
// 1. (y - 1) % 4 = 0
// 2. there exists some number x such that:
//    a. y % x^2 = 0
//    b. (x - 1) % 4 = 0.
// Let a = x - 1 and b = y - 1.
// Then:
//    a % 4 = 0;
//    b % 4 = 0;
//    (a+1) % (b+1)(b+1) = 0;
// Let c = a / 4 and d = b / 4. Then, (4c+1) % (4d+1)(4d+1) = 0

//NOX Therefore: 16d^2 + 8d + 1 = 4c + 1
//NOX Therefore, c = 4d^2 + 2d
//NOX Therefore, a/4 = 4(b/4)^2 + b/2 => a/4 = b^2/4 + b/2 => a = b^2 + 2b
//NOX Therefore, x - 1 = (y-1)^2 + 2y - 2 = y^2 - 2y + 1 + 2y - 2 = y^2 - 1
//NOX Therefore, x = y^2 ??!?

// (Continuing from before)
// Therefore, (4c + 1) % (16d^2 + 8d + 1) = 0
// Therefore, there is some integer i > 1 such that (4c + 1) / (16d^2 + 8d + 1) = I.
// So y / i  = 16d^2 + 8d + 1.
// Also, i <= 16d^2 + 8d + 1.
// So if i > y^0.5, y is square free.
// ( a bit better, but... still O(n^2) )

// (4c+1) % (4d+1)(4d+1) = 0 => (4c + 1) % (4d+1) = 0
// So there is some integer i > 1 such that 4c + 1 = i(4d + 1)
// => 4c + 1 - 4di - i = 0
// => 4(c-di) = i - 1
// ....
// y % x = 0 => i = y/x
// so: if y > x ^ 4, check if y % x = 0. If not, move on. If so, check y % x^2.

//...

// hilbert numbers:
// 1   5  9 13 17
// 21 25 29 33 37
// 41 45 49 53 57
// 61 65 69 73 77
// Total hilbert numbers below X = Round(X / 4)
// For each hilbert number below X, take its square, subtract 1, mod result by 4...
// .. if that == 0, the hilbert's square is taken out, put in an array.

//...

// A hilbert number may be:
//  - square free
//  - have 1 square factors
//  - have 2 square factors
//  - ...
//  - have n square factors.
//  (eg 25 has  square factor (5^2), 625 has 2 (5^2, 25^2).)








