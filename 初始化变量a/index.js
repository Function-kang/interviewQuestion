var a = {
  i: 1,
  toString() {
    return a.i++;
  },
};

if (a == 1 && a == 2 && a == 3) {
  console.log("Hello world");
}

/*

  使用 == 双等号时，进行了隐式转换，
  当 {i:1} == 1 时会默认执行valueOf和toString两个Object方法，
  相当于 {i:1}.toString(){ return a.i++; } == 1，
  所以每次执行i++

*/
