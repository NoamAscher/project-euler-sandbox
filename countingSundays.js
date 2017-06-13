// Solved in 7 minutes?
// took milliseconds.



// 1900 was 365 days.
// Jan 1 1900 was a Monday.
// Let Sunday be denoted by 0, Monday be denoted by 1, etc.
//


function countingSundays() {
  var sundayCount = 0;
  var firstOfMonth = ((365 % 7) + 1) % 7;
  for (var year = 1901; year <= 2000; year++) {
    for (var month = 1; month <= 12; month++) {
      if (month == 9 || month == 4 || month == 6 || month == 11) {
        firstOfMonth = ((30 % 7) + firstOfMonth) % 7;
      } else if (month == 2 && year % 4 == 0) {
        firstOfMonth = ((29 % 7) + firstOfMonth) % 7;
      } else if (month == 2) {
        firstOfMonth = ((28 % 7) + firstOfMonth) % 7;
      } else {
        firstOfMonth = ((31 % 7) + firstOfMonth) % 7;
      }
      if (firstOfMonth == 0) {
        sundayCount ++;
      }
    }
  }
  return sundayCount;
}