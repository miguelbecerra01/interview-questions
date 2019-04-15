// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    //Math.sign retuns 1 if is positive or -1 if is negative or 0 if is 0
    return parseInt(reverseStr(n.toString())) * Math.sign(n);
}

function reverseStr(str) {
    let reversed = '';
    for (character of str) {
        reversed = character + reversed;
    }
    return reversed;
}

module.exports = reverseInt;
