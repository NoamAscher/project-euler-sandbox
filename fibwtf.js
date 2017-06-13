function fibArray() {
  var array0 = new Array(1000).fill(0);
  var array1 = new Array(1000).fill(0);
  array1[999] = 1;
  var array2 = new Array(1000).fill(0);
  array2[999] = 1;
  var fibIndex = 2;
  var digCount = 1;
  while (array2[0] != 1) {
    for (var j = 0; j < array1.length; j++) {
      array0[j] = array1[j];
      array1[j] = array2[j];
    }
    fibIndex++;
    var carry = 0;
    for (var i = 999; i > 999-digCount; i--) {
      if (array0[i]+array1[i]+carry > 9) {
        array2[i] = array0[i]+array1[i]+carry-10;
        carry = 1;
      } else {
        array2[i] = array0[i]+array1[i]+carry;
        carry = 0;
      }
    }
    if (carry == 1) {
      array2[999-digCount] = 1;
      digCount++;
    }
  }
  return fibIndex;
}