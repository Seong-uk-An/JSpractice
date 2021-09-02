const arr = ["short", "long sentence, it is not appropriate"];

arr.map((s) => {
  if (s.length < 10) {
    console.log(s);
  }
});
