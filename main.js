let http = require("http");
let fs = require("fs");
let url = require("url"); //request url이라고 하는것을 요구한다. 누구에게? nodejs가 가진 모듈에게 nodejs가 가진 수많은 기능들을 비슷한 놈들끼리 그룹핑한 url이라는  모듈을 요구한 것 즉, url이라는 모듈은 url이라는 변수를 통해서 사용할 것

let app = http.createServer(function (request, response) {
  let _url = request.url; // 여기에 query string값이 들어감
  let queryData = url.parse(_url, true).query; //queryData에 담긴 데이터는 객체이고
  let title = queryData.id;
  if (_url == "/") {
    // _url = "/index.html";
    title = "Welcome";
  }
  if (_url == "/favicon.ico") {
    return response.writeHead(404);
  }
  response.writeHead(200);
  const template = `
  <!doctype html>
<html>
<head>
  <title>WEB1 - ${title}</title>
  <meta charset="utf-8">
</head>
<body>
  <h1><a href="/">WEB</a></h1>
  <ul>
    <li><a href="/?id=HTML">HTML</a></li>
    <li><a href="/?id=CSS">CSS</a></li>
    <li><a href="/?id=JavaScript">JavaScript</a></li>
  </ul>
  <h2>${title}</h2>
  <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
  <img src="coding.jpg" width="100%">
  </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
  </p>
</body>
</html>

  `; // respose.end();에 넣어줄 값을 아예 html로 작성해서 파일로 만들어서 넣어준 것 거기에 ${}로 인자값을 전달해서 동적으로 변화시킴
  response.end(template); //fs.readFileSync(__dirname + _url) fs.redFileSync는 파일을 읽어주는 것 readFileSync('노드가 실행되는 경로', '인코드');
  //response.end는 아무래도 인자 안에 담긴 정보를 불러오는 것인듯
});
app.listen(3000);
