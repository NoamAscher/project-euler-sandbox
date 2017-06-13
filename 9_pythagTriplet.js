// After spinning wheels for 15 minutes the lightbulb went off, and I then wrote it out in 5-6 additional minutes.
// Runs real fast

var pythagTriplet = function() {
  for (var a = 3; a < 999; a++) {
    for (var b = 4; a+b < 999 && a*a+b*b <= (1000-a-b)*(1000-a-b); b++) {
      if (a*a+b*b == (1000-a-b)*(1000-a-b)) {
        console.log(a, b, 1000-a-b);
        return a*b*(1000-a-b);
      }
    }
  }
};