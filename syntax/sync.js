let fs = require("fs");

// console.log("A");
// const result = fs.readFileSync("syntax/sample.txt", "utf8"); //readFileSync는 return 값을 주어서 변수에 담을수 있다. 동기적인 것이고 이게 완료되면 다음 코드가 진행된다.
// console.log(result);
// console.log("C");
// 결과 : ABC
console.log("A");
fs.readFile("syntax/sample.txt", "utf8", (err, data) => {
  // readFile은 return값을 주지 않아서 변수에 담으면 안된다. 그래서 함수를 세번째 인자로 줘야한다. 비동기적인 것으로 다음 코드는 이것의 완료 여부와 상관없이 진행된다.
  console.log(data); //함수를 읽는 작업이 끝나면 함수를 실행시키면서 첫번째 인자에는 에러를 두번째 인자에는 파일의 내용을 준다.
});
console.log("C");
//결과 : ACB
