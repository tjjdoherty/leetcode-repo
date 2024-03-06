/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x
    .toString() // change from integer to string
    .split('') // split into an array of individual chars
    .reverse() // reverses the order of the array
    .join('') // rejoin it
    == x // is it equal to the original? will return either true or false
};