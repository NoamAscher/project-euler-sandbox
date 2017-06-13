// about 7 minutes
// runs in about 10 milliseconds in node, and 255-340 milliseconds in repl.

function coinSums() {
  var sumCount = 0;
  for (var twoL = 0; twoL <= 200; twoL+= 200) {
    for (var oneL = 0; twoL+oneL <= 200; oneL += 100) {
      for (var p50 = 0; twoL+oneL+p50 <= 200; p50 += 50) {
        for (var p20 = 0; twoL+oneL+p50+p20 <= 200; p20 += 20) {
          for (var p10 = 0; twoL+oneL+p50+p20+p10 <= 200; p10 += 10) {
            for (var p5 = 0; twoL+oneL+p50+p20+p10+p5 <= 200; p5 += 5) {
              for (var p2 = 0; twoL+oneL+p50+p20+p10+p5+p2 <= 200; p2 += 2) {
                for (var p1 = 0; twoL+oneL+p50+p20+p10+p5+p2+p1 <= 200; p1 += 1) {
                  if (twoL+oneL+p50+p20+p10+p5+p2+p1 == 200) {
                    sumCount++;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return sumCount;
}