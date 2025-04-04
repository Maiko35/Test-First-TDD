//Micheal Asiimwe and Jannie Birungi

function fibonacci(n) {
    if (n < 0) {
      throw new Error("Input must be a non-negative integer");
    }
    if (n <= 1) {
      return n;
    } else {
      let a = 0;
      let b = 1;
      for (let i = 2; i <= n; i++) {
        let temp = b;
        b = a + b;
        a = temp;
      }
      return b;
    }
  }
  
  //Evolving the algorithim
  
  // Test 1: Fibonacci(0) = 0
  console.assert(fibonacci(0) === 0, "Test 1 failed: Fibonacci(0) should be 0");
  
  // Test 2: Fibonacci(1) = 1
  console.assert(fibonacci(1) === 1, "Test 2 failed: Fibonacci(1) should be 1");
  
  // Test 3: Fibonacci(2) = 1
  console.assert(fibonacci(2) === 1, "Test 3 failed: Fibonacci(2) should be 1");
  
  // Test 4: Fibonacci(3) = 2
  console.assert(fibonacci(3) === 2, "Test 4 failed: Fibonacci(3) should be 2");
  
  // Test 5: Fibonacci(10) = 55
  console.assert(fibonacci(10) === 55, "Test 5 failed: Fibonacci(10) should be 55");
  
  // Test 6: Negative input raises an Error
  let negativeInputTestPassed = false;
  try {
    fibonacci(-1);
  } catch (error) {
    negativeInputTestPassed = true;
  }
  console.assert(negativeInputTestPassed, "Test 6 failed: Negative input should raise Error");
  
  console.log("All tests passed!");
  
  // GitHub Link: [Your GitHub repository link here]
  // Please replace [Your GitHub repository link here] with your actual GitHub repository URL.