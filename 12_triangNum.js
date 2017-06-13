// ran in 326 milliseconds.
// took about total 15 minutes to code once I decided to do it the easy way.


function hiDivisTriangNum() {
  var d = new Date();
  var currentNum = 0;
  var currentVar = 0;
  var divisorCount = 0;

  for (var i = 250; i > 0; i++) {
    var triangNum = (1+i)*i/2;

    divisorCount = 2;
    var divisorArray = [1, triangNum];
    for (var k = 2; k < Math.sqrt(triangNum); k++) {
      if (triangNum % k == 0) {
        var upperDivisor = triangNum / k;
        divisorArray.push(k, upperDivisor);
        divisorCount += 2;
      }
    }
    if (triangNum % Math.sqrt(triangNum) == 0){
      divisorArray.push(Math.sqrt(triangNum));
      divisorCount++;
    }
    // divisorCount = divisorArray.length;
    if (divisorCount >= 500) {
      currentNum = triangNum;
      currentVar = i;
      break;
    }
  }

  var d2 = new Date;
  console.log(d2-d);
  console.log(divisorArray.length);
  console.log(divisorArray);
  console.log(currentVar);
  return currentNum;
};



