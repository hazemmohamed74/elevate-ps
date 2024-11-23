function printPrimes(n, m) {
    for (let i = n; i <= m; i++) {
      let isPrime = true;
      for (let j = 2; j * j <= i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime && i > 1) {
        console.log(i);
      }
    }
  }
  
  printPrimes(5, 10); // Output: 7
  printPrimes(7, 20); // Output: 11 13 17 19