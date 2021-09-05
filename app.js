const array = [1, 2, 3, 4, 5];

const fir = array[0];
const sec = array[1];
const thi = array[2];
const fou = array[3];
const fif = array[4];
console.log(fir, sec, thi, fou, fif); // 1,2,3,4,5

const [f, s, t, fo, fi] = array;
console.log(f, s, t, fo, fi); // 1,2,3,4,5

const [one, two, ...rest] = array;
console.log(one, two, rest); // 1, 2, [3,4,5]
