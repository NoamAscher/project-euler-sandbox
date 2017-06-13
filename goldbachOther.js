// use an (approx. O(nlogn)) algorithm to find a better algorithm for later...

function sieve(size) {
  var arrayL = size+1;
  var primes = new Array(arrayL);
  var odds = new Array(arrayL);
  while(arrayL--) primes[arrayL] = true;
  arrayL = size+1;
  while(arrayL--) odds[arrayL] = [false, false];
  primes[0] = false;
  primes[1] = false;
  // console.log("initial variables initialized")
  for (var i = 2; i <= Math.sqrt(size); i++) {
    if (primes[i] == true) {
      for (var j = Math.pow(i, 2); j <= size; j+= i) {
        primes[j] == false;
        if (j % 2 != 0) odds[j] = [true, false];
      }
    }
  }
  return [primes, odds];
}

function innerGBO(size, sieveArray) {
  var d1 = new Date();

  var filteredPrimes = sieveArray[0].filter(function(p, i) {
    if (i > size-1000 && p == true) return p;
  });
  filteredPrimes.forEach(function(p, i) {
    for (var k = 1; k <= Math.sqrt(500); k++) {
      if (sieveArray[1][i + 2*k*k] == [true, false]) sieveArray[1][i + 2*k*k] = [true, true];
    }
  });
  var composite = false;
  for (var l = 0; l <= size; l++) {
    if (sieveArray[1][l] == [true, false]) {
      composite = l;
      break;
    }
  }
  var d2 = new Date();
  console.log("time for " + size + ": " + (d2-d1));
  return composite;
}

function goldbachOther() {
  var d1 = new Date();
  var size = 10000000;
  var sieveArray = sieve(size);
  var maybeRetVal = false;
  var innerSize = 1000;
  var sieveSlice = [];
  while (true) {
    sieveSlice = [sieveArray[0].slice(innerSize-1000, innerSize),
                  sieveArray[1].slice(innerSize-1000, innerSize)];
    maybeRetVal = innerGBO(innerSize, sieveSlice);
    if (maybeRetVal != false) {
      break;
    }
    innerSize += 1000;
    if (innerSize >= size) {
      maybeRetVal = false;
      break;
    }
    // test
    // if (true) {
    //   console.log('BREAK!');
    //   break;
    // }
    // end test
  }
  var d2 = new Date();
  console.log("total time: " + d2 - d1);
  return maybeRetVal;
}






function goldbachOther() {
  var primesAndOdds = null;
  for (var i = 0; i < 150; i++) {
    var tempComposites = primesAndOdds;
    primesAndOdds = sieve(i*1000+1, i*1000+1000, primesAndOdds);
    if (tempComposites == null) {
      tempComposites = primesAndOdds[1];
    } else {
      tempComposites = primesAndOdds[1].filter(function(e) {
        return e >= i*1000+1});
    }
    var compositeFound = false;
    // tempComposites.forEach(function(composite) {
    for (var j = 0; j < tempComposites.length; j++) {
      var composite = tempComposites[j];
      var primeFound = false;
      for (var n = 1; n < Math.sqrt(composite/2); n++){
        if (primesAndOdds[0][composite - 2*Math.pow(n, 2)] == true) {
          primeFound = true;
          console.log(composite - 2*Math.pow(n, 2) + " + " + 2*Math.pow(n, 2) + " = " + composite);
          break;
        }
      }
      if (!primeFound) {
        compositeFound = composite;
        console.log("prime not found!! composite: " + composite);
        break;
      }
    }
    if (compositeFound) return compositeFound;
  }
  return false;
}


// low to high: 1-1000, 1001-2000, etcetera.
function sieve(low, high, primesAndOdds) {
  if (primesAndOdds == null) {
    var size = 1001;
    var primes = new Array(size);
    while(size--) primes[size] = true;
    primes[0] = false;
    primes[1] = false;
    var odds = [];
    primesAndOdds = [];
    for (var i = low + 1; i <= Math.sqrt(high); i++) {
      if (primes[i] == true) {
        for (var j = Math.pow(i, 2); j <= high; j+= i) {
          primes[j] == false;
          if (j % 2 != 0) odds.push(j);
        }
      }
    }
    primesAndOdds = [primes, odds];
  } else {
    var size = 1000;
    primes = new Array(size);
    while(size--) primes[size] = true;
    primesAndOdds[0].concat(primes);
    primesAndOdds[0].slice(0,high/2+1).forEach(function(prime) {
      for (var k = Math.floor(low / prime) + prime; k <= high; k += prime) {
        primesAndOdds[0][k] = false;
        if (k % 2 != 0) primesAndOdds[1].push(k);
      }
    });
  }
  return primesAndOdds;
}