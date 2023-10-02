import { chop } from "./kata-01/chop";

// Kata 01: Binary chop
const array = [42, 69, 10, 23, 22, 900, 1000, 24, 222, 76, 1, 2, 3, 4, 5];
console.time("chop");
const value = chop(69, array);
console.timeEnd("chop");
console.log(value);
