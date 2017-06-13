


function padString(num) {
  if (num < 10) {
    // console.log("00" + num.toString());
    return "00" + num.toString();
  } else if (num < 100) {
    return "0" + num.toString();
  } else {
    return num.toString();
  }
}

function tripleCompare(trip1, trip2) {
  for (var i = 0; i < trip1.length; i++) {
    for (var j = 0; j < trip2.length; j++) {
      if (trip1[i] == trip2[j]) return false;
    }
  }
  return true;
}


function subStringDivisibility(){

  var sum = 0;

  for (var n789 = "017"; Number(n789) <= "987"; n789 = padString(Number(n789)+17)) {
    if (n789[0] != n789[1] && n789[0] != n789[2] && n789[1] != n789[2]){
      console.log(n789 + '. n6: ');
      for (var n6 = 0; n6 < 10; n6++) {
        if (Number(n6.toString() + n789[0] + n789[1]) % 13 == 0 &&
            n6 != n789[0] && n6 != n789[1] && n6 != n789[2]) {
          var n678 = n6.toString() + n789[0] + n789[1]
          console.log(n678 + '. n5: ');
          for (var n5 = 0; n5 < 10; n5++) {
            if (Number(n5.toString() + n678[0] + n678[1]) % 11 == 0 &&
                n5 != n678[0] && n5 != n678[1] && n5 != n678[2] && n5 != n789[2]) {
              var n567 = n5.toString() + n678[0] + n678[1]
              console.log(n567 + '. n4: ');
              for (var n4 = 0; n4 < 10; n4++) {
                if (Number(n4.toString() + n567[0] + n567[1]) % 7 == 0 &&
                    n4 != n567[0] && n4 != n567[1] && n4 != n567[2] && n4 != n678[2] && n4 != n789[2]) {
                  var n456 = n4.toString() + n567[0] + n567[1]
                  console.log(n456 + '. n3: ');
                  for (var n3 = 0; n3 < 10; n3++) {
                    if (Number(n3.toString() + n456[0] + n456[1]) % 5 == 0 &&
                        n3 != n456[0] && n3 != n456[1] && n3 != n456[2] &&
                        n3 != n567[2] && n3 != n678[2] && n3 != n789[2]) {
                      var n345 = n3.toString() + n456[0] + n456[1]
                      console.log(n345 + '. n2: ');
                      for (var n2 = 0; n2 < 10; n2++) {
                        if (Number(n2.toString() + n345[0] + n345[1]) % 3 == 0 &&
                            n2 != n345[0] && n2 != n345[1] && n2 != n345[2] &&
                            n2 != n456[2] &&
                            n2 != n567[2] && n2 != n678[2] && n2 != n789[2]) {
                          var n234 = n2.toString() + n345[0] + n345[1]
                          console.log(n234 + '. n1: ');
                          for (var n1 = 0; n1 < 10; n1++) {
                            if (Number(n1.toString() + n234[0] + n234[1]) % 2 == 0 &&
                                n1 != n234[0] && n1 != n234[1] && n1 != n234[2] &&
                                n1 != n345[2] && n1 != n456[2] &&
                                n1 != n567[2] && n1 != n678[2] && n1 != n789[2]) {
                              var n123 = n1.toString() + n234[0] + n234[1];
                              console.log(n123 + '. n0: ');
                              var n0 = 45 - n123[0] - n123[1] - n123[2]
                                                    - n456[0] - n456[1] - n456[2]
                                                    - n789[0] - n789[1] - n789[2];
                              console.log(n0.toString() + n123 + n456 + n789);
                              sum += Number(n0.toString() + n123 + n456 + n789);
                              console.log(sum);
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  return sum;
}
