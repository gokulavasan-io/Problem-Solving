// 1st

function sumNumbers(n) {
    let i = 1;
    let sum = 0;
    while (i <= n) {
      sum += i;
      i++;
    }
    return sum;
  }
  
  console.log(sumNumbers(6));
  
  console.log("=============================================");
  
  
  //2nd
  
  function calculateFactorial(n) {
    let fact = 1;
    while (n > 0) {
      fact *= n; //fact=fact*n;
      n--;
    }
    return fact;
  }
  console.log(calculateFactorial(7));
  console.log("=============================================");
  
  //3rd
  function printEvenNumbers(n) {
    let i = 1;
    while (i <= n) {
      if (i % 2 == 0) {
        console.log(i);
      }
      i++;
    }
  }
  
  printEvenNumbers(50);
  console.log("=============================================");
  
  /* Fix the error in this function sumNumbers that takes a number n as a parameter and returns the sum of all numbers from 1 to n. However, there is an error in the while loop that causes the function to return the wrong result.
   */ function sumNumbers(n) {
    let sum = 0;
    let i = 0;
    while (i <= n) {
      sum += i;
      i++;
    }
    return sum;
  }
  
  console.log(sumNumbers(6));
  
  
  