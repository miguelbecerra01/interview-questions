// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


//Option 2
function chunk(array, size) {
    const chunked = [];
    let index = 0;
    while (index < array.length) {
        let chunk = array.slice(index, index + size);
        chunked.push(chunk);
        index += size;
    }

    return chunked;
}

////Option 1
// function chunk(array, size) {
//     const chunked = [];
//     for (let element of array) {
//         const chunk = chunked[chunked.length - 1];
//         if (!chunk || chunk.length === size) {
//             chunked.push([element]);
//         } else {
//             chunk.push(element);
//         }
//     }
//     return chunked;
// }


chunk([1, 2, 3, 4, 5], 3);

module.exports = chunk;