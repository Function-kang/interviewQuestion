var a = 20;
function func() {
  console.log(a);
  a = 5;
  console.log(a);
  var a = 10;
  console.log(a);
}
func();
