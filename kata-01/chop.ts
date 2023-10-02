// Kata-01: Chop
// Takes a number and an array and returns either the index of the number if it is contained in the array or -1 if it isn't.

// export function chop(num: number, array: Array<number>): number {
//     const isNum = (value: number) => value === num;
//     return array.findIndex(isNum);
// }

// export function chop(num: number, array: Array<number>): number {
//     let count = 0;
//     for (const value of array) {
//         if (num === value) {
//             return count;
//         }
//
//         count++;
//     }
//
//     return -1;
// }

// export function chop(num: number, array: Array<number>): number {
//     for (const [index, element] of array.entries()) {
//         if (num === element) {
//             return index;
//         }
//     }
//
//     return -1;
// }

export function chop(num: number, array: Array<number>): number {
    return array.lastIndexOf(num);
}
