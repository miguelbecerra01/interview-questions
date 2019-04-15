// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// //Option 4
// function reverse(str) {
//     return str.split('').reduce((reversed, character) => character + reversed, '');
// }

//Option 3
function reverse(str) {
    let reversed = '';
    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}


////option 1
// function reverse(str) {
//     let reversed = str.split('');
//     let indexLeft = 0;
//     let indexRight = str.length - 1;
//     while (indexLeft < indexRight) {
//         const tempLetter = reversed[indexLeft];
//         reversed[indexLeft] = reversed[indexRight];
//         reversed[indexRight] = tempLetter;
//         indexLeft++;
//         indexRight--;
//     }
//     return reversed.join('');
// }

////Obtion 2
// function reverse(str) {
//     let text = '';
//     let index = str.length - 1;
//     while (index >= 0) {
//         text += str[index];
//         index--;
//     }

//     return text;
// }





module.exports = reverse;
