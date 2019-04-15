// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

////Option 3 -> fastest
function palindrome(str) {
    let word = new Set();
    for (let character of str) {
        if (!word.has(character)) {
            word.add(character);
        } else {
            word.delete(character);
        }
    }
    return word.size <= 1 ? true : false;
}

////Option 1 -> slow
// function palindrome(str) {
//     return str === str.split('').reverse().join('');
// }

////Option 2 -> slow
// function palindrome(str) {
//     return str.split('').every((char, index) => {
//         return char === str[str.length - index - 1];
//     });
// }


module.exports = palindrome;
