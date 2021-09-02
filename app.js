const str = "Carpe diem, seize the day";

const arr = ["Carpe", "diem", "seize", "the", "day"];
const howManyHasE = (arr) => {
  let count = 0;
  arr.forEach((str) => {
    if (str.indexOf("e") > -1) count++;
  });
  return count;
};

console.log(howManyHasE(arr));

let count = 0;
arr.map((str) => {
  if (str.indexOf("e") > -1) count++;
});

console.log(count);
