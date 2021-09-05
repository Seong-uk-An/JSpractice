const array = [1, 2, 3, 4];

const fir = array[0];
const sec = array[1];
const thi = array[2];
const fou = array[3];
console.log(fir, sec, thi, fou);

const [f, s, t, fo] = array;
console.log(f, s, t, fo);

const [one, two, ...rest] = array;
console.log(one, two, rest);
