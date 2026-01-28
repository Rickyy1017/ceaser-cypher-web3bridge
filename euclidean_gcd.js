function gcd(a, b) {
    /**
     * Compute the greatest common divisor (GCD) of two integers a and b
     * using the Euclidean algorithm.
     *
     * @param {number} a - First integer
     * @param {number} b - Second integer
     * @returns {number} The GCD of a and b
     */
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Example usage
console.log(gcd(48, 18));  // Output: 6
console.log(gcd(100, 75)); // Output: 25
console.log(gcd(17, 13));  // Output: 1
