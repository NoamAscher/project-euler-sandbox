// a bit dirty lol

function magic5gon() {

  var finalString = "0000000000000000";

  // begin edge nesting
  for (var edge1 = 6; edge1 > 0; edge1--) {
    for (var edge2 = 10; edge2 > edge1; edge2--) {
      if (edge2 != edge1) {
        for (var edge3 = 10; edge3 > edge1; edge3--) {
          if (edge3 != edge1 && edge3 != edge2) {
            for (var edge4 = 10; edge4 > edge1; edge4--) {
              if (edge4 != edge1 && edge4 != edge2 && edge4 != edge3) {
                for (var edge5 = 10; edge5 > edge1; edge5--) {
                  if (edge5 != edge1 && edge5 != edge2 && edge5 != edge3 && edge5 != edge4) {

                    // begin other-than-edge nesting
                    for (var mid1 = 9; mid1 >= 0; mid1--) {
                      if (mid1 != edge1 && mid1 != edge2 &&
                          mid1 != edge3 && mid1 != edge4 &&
                          mid1 != edge5) {
                        // if (mid1 == 0) mid1 = 10;
                        var inner5 = mid1;
                        for (var mid2 = 9; mid2 >= 0; mid2--) {
                          if (mid2 != edge1 && mid2 != edge2 &&
                              mid2 != edge3 && mid2 != edge4 &&
                              mid2 != edge5 && mid2 != mid1) {
                            // if (mid2 == 0) mid2 = 10;
                            // console.log('passed mid2 check');
                            var inner1 = mid2;
                            for (var mid3 = 9; mid3 >= 0; mid3--) {
                              if (mid3 != edge1 && mid3 != edge2 &&
                                  mid3 != edge3 && mid3 != edge4 &&
                                  mid3 != edge5 && mid3 != mid1 &&
                                  mid3 != mid2) {

                                // console.log('passed mid3 check');
                                var inner2 = mid3;
                                for (var mid4 = 9; mid4 >= 0; mid4--) {
                                  if (mid4 != edge1 && mid4 != edge2 &&
                                      mid4 != edge3 && mid4 != edge4 &&
                                      mid4 != edge5 && mid4 != mid1 &&
                                      mid4 != mid2 && mid4 != mid3) {
                                    // if (mid4 == 0) mid4 = 10;
                                    // console.log('passed mid4 check');
                                    var inner3 = mid4;
                                    for (var mid5 = 9; mid5 >= 0; mid5--) {
                                      if (mid5 != edge1 && mid5 != edge2 &&
                                          mid5 != edge3 && mid5 != edge4 &&
                                          mid5 != edge5 && mid5 != mid1 &&
                                          mid5 != mid2 && mid5 != mid3 &&
                                          mid5 != mid4) {

                                        var inner4 = mid5;

                                        // console.log(edge1, mid1, inner1);
                                        // console.log(edge2, mid2, inner2);
                                        // console.log(edge3, mid3, inner3);
                                        // console.log(edge4, mid4, inner4);
                                        // console.log(edge5, mid5, inner5);
                                        // do the check
                                        var mId1 = mid1;
                                        var mId2 = mid2;
                                        var mId3 = mid3;
                                        var mId4 = mid4;
                                        var mId5 = mid5;
                                        if (mId1 == 0) mId1 = 10;
                                        if (mId2 == 0) mId2 = 10;
                                        if (mId3 == 0) mId3 = 10;
                                        if (mId4 == 0) mId4 = 10;
                                        if (mId5 == 0) mId5 = 10;
                                        var innEr1 = inner1;
                                        var innEr2 = inner2;
                                        var innEr3 = inner3;
                                        var innEr4 = inner4;
                                        var innEr5 = inner5;
                                        if (innEr1 == 0) innEr1 = 10;
                                        if (innEr2 == 0) innEr2 = 10;
                                        if (innEr3 == 0) innEr3 = 10;
                                        if (innEr4 == 0) innEr4 = 10;
                                        if (innEr5 == 0) innEr5 = 10;

                                        var total1 = edge1+mId1+innEr1;
                                        var total2 = edge2+mId2+innEr2;
                                        var total3 = edge3+mId3+innEr3;
                                        var total4 = edge4+mId4+innEr4;
                                        var total5 = edge5+mId5+innEr5;
                                        if (total1 == total2 &&
                                            total2 == total3 &&
                                            total3 == total4 &&
                                            total4 == total5) {
                                          string = edge1.toString() + mId1.toString() + innEr1.toString() +
                                                        edge2.toString() + mId2.toString() + innEr2.toString() +
                                                        edge3.toString() + mId3.toString() + innEr3.toString() +
                                                        edge4.toString() + mId4.toString() + innEr4.toString() +
                                                        edge5.toString() + mId5.toString() + innEr5.toString();
                                          // console.log(string);
                                          if (string.length == 16 && Number(string) > Number(finalString)) {
                                            finalString = string;
                                            // console.log(finalString);
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
              }
            }
          }
        }
      }
    }
  }
  return finalString;
}