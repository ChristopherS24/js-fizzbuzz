//ciclo for
for (let i = 1; i <= 100; i++) {
//valori divisibili per 3 e per 5
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
//valori divisibili per 3
    } else if (i % 3 == 0) {
      console.log("Fizz");
//valori divisibili per 5
    } else if (i % 5 == 0) {
      console.log("Buzz");
//valori
    } else {
      console.log(i);
    }
  }