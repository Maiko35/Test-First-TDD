// Pair: Micheal Asiimwe & Jannie Birungi

function factorial(n) {
    if (typeof n !== 'number' || !Number.isInteger(n)){
        throw new TypeError("Input must be an integer");
    }
    if(n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0){
        return 1;
    } else {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

// --- Tests ---
function runTests() {
    let testResults = [];

    function assertEqual(actual, expected, message){
        if (actual === expected){
            testResults.push({ success: true, message: message});
        } else {
            testResults.push({ success: false, message: `${message} - Expected: ${expected}, Actual: ${actual}` });
        }
    }
    function assertThrows(func, expectedErrorType, message){
        try{
            func();
            testResults.push({ success: false, message: `${message} - Expected to throw ${expectedErrorType.name}, but did not.`});
        } catch (error) {
            if (error instanceof expectedErrorType) {
                testResults.push({ success: true, message: message});
            } else {
                testResults.push({ success: false, message: `${message} - Expected to throw ${expectedErrorType.name}, but threw ${error.constructor.name}: ${error.message}`});
            }
        }
    }
    //Test cases
    assertEqual(factorial(0), 1, "Test Case 1: Factorial of 0");
    assertEqual(factorial(5), 120, "Test Case 2: Factorial of 5");
    assertEqual(factorial(1), 1, "Test Case 3: Factorial of 1");
    assertEqual(factorial(10), 3628800, "Test Case 4: Factorial of 10");

    assertThrows(() => factorial(-1), Error, "Test Case 5: Factorial of -1 (negative)");
    assertThrows(() => factorial(-5), Error, "Test Case 6: Factorial of -5 (negative)");
    assertThrows(() => factorial(3.5), TypeError, "Test Case 7: Factorial of 3.5 (non-integer)");
    assertThrows(() => factorial("hello"), TypeError, "Test Case 8: Factorial of 'hello' (non-integer)");

    // Output test Results
    console.log("--- Test Results ---");
    testResults.forEach(result => {
        if (result.success) {
            console.log(`Yes ... ${result.message}`);
        } else {
            console.error(`No ... ${result.message}`);
        }
    });
}
runTests();