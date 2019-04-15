// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//OPTION 2
//HashMap (O(n))
function maxChar(str) {
    let charMap = {};
    let maxChar = '';
    let maxCount = 0;

    for (let character of str) {

        if (!charMap[character]) {
            charMap[character] = 1;
        } else {
            charMap[character]++;
        }


        if (maxCount <= charMap[character]) {
            maxCount = charMap[character];
            maxChar = character;
        }

        //for in is used for go through the object properties
        // for (let char in charMap) {
        //     if (maxCount < charMap[char]) {
        //         maxCount = charMap[char];
        //         maxChar = char;
        //     }
        // }

    }

    return maxChar;
}

////OPTION 1 O(n2)
// function maxChar(str) {

//     let maxCharacter = '';
//     let maxCount = 0;

//     for (let character of str) {
//         let currentCount = 0;
//         let position = 0;

//         while (str.indexOf(character, position + 1) !== -1) {
//             position = str.indexOf(character, position + 1);
//             currentCount++;
//         }
//         if (maxCount <= currentCount) {
//             maxCount = currentCount;
//             maxCharacter = character;
//         }
//     }

//     return maxCharacter;
// }

module.exports = maxChar;
