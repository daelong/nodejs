let http = require("http");
let fs = require("fs");
let url = require("url"); //request url이라고 하는것을 요구한다. 누구에게? nodejs가 가진 모듈에게 nodejs가 가진 수많은 기능들을 비슷한 놈들끼리 그룹핑한 url이라는  모듈을 요구한 것 즉, url이라는 모듈은 url이라는 변수를 통해서 사용할 것

let app = http.createServer(function (request, response) {
  //
  let _url = request.url; // 여기에 query string값이 들어감
  console.log(_url);
  let queryData = url.parse(_url, true).query; //queryData에 담긴 데이터는 객체이고
  console.log(queryData);
  if (_url === "/") {
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + _url));
  }
});
app.listen(3000);
