let http = require("http");
let fs = require("fs");
let url = require("url"); //request url이라고 하는것을 요구한다. 누구에게? nodejs가 가진 모듈에게 nodejs가 가진 수많은 기능들을 비슷한 놈들끼리 그룹핑한 url이라는  모듈을 요구한 것 즉, url이라는 모듈은 url이라는 변수를 통해서 사용할 것
let testFolder = "./data";

function templateHTML(title, li, body) {
  return `
  <!doctype html>
<html>
<head>
  <title>WEB1 - ${title}</title>
  <meta charset="utf-8">
</head>
<body>
  <h1><a href="/">WEB</a></h1>
  ${li}
  ${body}
  </p>
</body>
</html>
  `; // respose.end();에 넣어줄 값을 아예 html로 작성해서 파일로 만들어서 넣어준 것 거기에 ${}로 인자값을 전달해서 동적으로 변화시킴
}

function makeList(filelist) {
  let li = `<ul>`;
  li = filelist
    .map((data) => `<li><a href="/?id=${data}">${data}</a></li>`)
    .join(" ");
  li = li + `</ul>`;
  return li;
}

let app = http.createServer(function (request, response) {
  let _url = request.url; // 여기에 query string값이 들어감
  let queryData = url.parse(_url, true).query; //queryData에 담긴 데이터는 객체이고
  let title = queryData.id;
  let pathName = url.parse(_url, true).pathname;

  if (pathName === "/") {
    if (title) {
      fs.readdir(testFolder, (error, filelist) => {
        fs.readFile(`data/${queryData.id}`, "utf8", (err, data) => {
          const list = makeList(filelist);
          const template = templateHTML(
            title,
            list,
            `<h2>${title}</h2><p>${data}</p>`
          );
          response.writeHead(200); // 웹브라우저가 웹서버에 접속햇을 때 웹서버가 응답을 하는데 웹서버와 웹브라우저 사이의 정보를 기계들이 통신하기위한 간결한 약속이 필요한데 여기서 200은 파일을 성공적으로 전달했다는 뜻, 404는 파일을 찾을수 없다라는 것
          response.end(template); //fs.readFileSync(__dirname + _url) fs.redFileSync는 파일을 읽어주는 것, fs는 파일 시스템의 약자, readFileSync('노드가 실행되는 경로', '인코드');
          //response.end는 아무래도 인자 안에 담긴 정보를 불러오는 것인듯
        });
      });
    } else {
      fs.readdir(testFolder, (error, filelist) => {
        title = "Welcome";
        let data = "Hello, node.js";
        const list = makeList(filelist);
        const template = templateHTML(
          title,
          list,
          `<h2>${title}</h2><p>${data}</p>`
        );
        response.writeHead(200);
        response.end(template);
      });
    }
  } else {
    response.writeHead(404);
    response.end("Not Found");
  }
});
app.listen(3000);
