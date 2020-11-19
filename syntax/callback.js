// function a() {
//   console.log("A");
// }
const a = function () {
  //JavaScript에서는 함수가 값임.
  console.log("A");
};
// a(); //변수 a를 ()로 호출함으로써 변수가 가지고 있는 함수를 호출할 수 있음.

function slowfunc(callback) {
  //이 slowfunc가 끝난 다음에 다음 일을 하라하려면 함수가 인자로 callback을 받으면됨
  callback();
}
slowfunc(a);
