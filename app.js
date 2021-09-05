const array = [1, 2, 3, 4, 5];

const first = array[0];
const second = array[1];
const third = array[2];
const fourth = array[3];
const fifth = array[4];
console.log(first, second, third, fourth, fifth); // 1,2,3,4,5

const [f, s, t, fo, fi] = array;
console.log(f, s, t, fo, fi); // 1,2,3,4,5

const [one, two, ...rest] = array;
console.log(one, two, rest); // 1, 2, [3,4,5]
