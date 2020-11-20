let http = require("http");
let fs = require("fs");
let url = require("url"); //request url이라고 하는것을 요구한다. 누구에게? nodejs가 가진 모듈에게 nodejs가 가진 수많은 기능들을 비슷한 놈들끼리 그룹핑한 url이라는  모듈을 요구한 것 즉, url이라는 모듈은 url이라는 변수를 통해서 사용할 것
let testFolder = "./data";
let qs = require("querystring");
let template = require("./lib/template");
let path = require("path");
let sanitizeHtml = require("sanitize-html");

let app = http.createServer(function (request, response) {
  let _url = request.url; // 여기에 query string값이 들어감
  let queryData = url.parse(_url, true).query; //queryData에 담긴 데이터는 객체이고
  let title = queryData.id;
  let pathName = url.parse(_url, true).pathname;
  if (pathName === "/") {
    if (title) {
      fs.readdir(testFolder, (error, filelist) => {
        let filteredId = path.parse(queryData.id).base;
        fs.readFile(`data/${filteredId}`, "utf8", (err, data) => {
          let sanitizedTitle = sanitizeHtml(title);
          let sanitizedData = sanitizeHtml(data);
          const list = template.list(filelist);
          const html = template.HTML(
            sanitizedTitle,
            list,
            `<h2>${sanitizedTitle}</h2><p>${sanitizedData}</p>`,
            `<a href="/create">create</a> <a href="/update?id=${sanitizedTitle}">update</a> 
            <form action="/delete_process" method="post">
              <input type="hidden" name="id" value="${sanitizedTitle}">
              <input type="submit" value="delete">
            </form>
            `
          );
          response.writeHead(200); // 웹브라우저가 웹서버에 접속햇을 때 웹서버가 응답을 하는데 웹서버와 웹브라우저 사이의 정보를 기계들이 통신하기위한 간결한 약속이 필요한데 여기서 200은 파일을 성공적으로 전달했다는 뜻, 404는 파일을 찾을수 없다라는 것
          response.end(html); //fs.readFileSync(__dirname + _url) fs.redFileSync는 파일을 읽어주는 것, fs는 파일 시스템의 약자, readFileSync('노드가 실행되는 경로', '인코드');
          //response.end는 아무래도 인자 안에 담긴 정보를 불러오는 것인듯
        });
      });
    } else {
      fs.readdir(testFolder, (error, filelist) => {
        title = "Welcome";
        let data = "Hello, node.js";
        const list = template.list(filelist);
        const html = template.HTML(
          title,
          list,
          `<h2>${title}</h2><p>${data}</p>`,
          `<a href="/create">create</a>`
        );
        response.writeHead(200);
        response.end(html);
      });
    }
  } else if (pathName === "/create") {
    fs.readdir(testFolder, (error, filelist) => {
      title = "Welcome";
      let data = "Hello, node.js";
      const list = template.list(filelist);
      const html = template.HTML(
        title,
        list,
        `<form action="/create_process" method="post">
        <p><input type="text" name="title" placeholder="title"></p>
        <p><textarea name="description" id="" cols="30" rows="10" placeholder="desfsdfdsfsdcription"></textarea></p>
        <p><input type="submit"></p>
        </form>`,
        ""
      );
      response.writeHead(200);
      response.end(html);
    });
  } else if (pathName === "/create_process") {
    let body = "";
    request.on("data", (data) => {
      body = body + data;
    });
    request.on("end", () => {
      let post = qs.parse(body);
      let title = post.title;
      let description = post.description;
      fs.writeFile(`data/${title}`, description, "utf8", (err) => {
        if (err) throw err;
        response.writeHead(302, { Location: `/?id=${title}` });
        response.end();
      });
    });
  } else if (pathName === "/update") {
    fs.readdir(testFolder, (error, filelist) => {
      let filteredId = path.parse(queryData.id).base;
      fs.readFile(`data/${filteredId}`, "utf8", (err, data) => {
        let sanitizedTitle = sanitizeHtml(title);
        let sanitizedData = sanitizeHtml(data);
        const list = template.list(filelist);
        const html = template.HTML(
          title,
          list,
          `
          <form action="/update_process" method="post">
          <input type="hidden" name="id" value="${sanitizedTitle}">
          <p><input type="text" name="title" value="${sanitizedTitle}"></p>
          <p><textarea name="description" id="" cols="30" rows="10">${sanitizedData}</textarea></p>
          <p><input type="submit"></p>
          </form>
          `,
          `<a href="/create">create</a> <a href="/update?id=${sanitizedTitle}">update</a> 
            <form action="/delete_process" method="post">
              <input type="hidden" name="id" value="${sanitizedTitle}">
              <input type="submit" value="delete">
            </form>
          `
        );
        response.writeHead(200); // 웹브라우저가 웹서버에 접속햇을 때 웹서버가 응답을 하는데 웹서버와 웹브라우저 사이의 정보를 기계들이 통신하기위한 간결한 약속이 필요한데 여기서 200은 파일을 성공적으로 전달했다는 뜻, 404는 파일을 찾을수 없다라는 것
        response.end(html); //fs.readFileSync(__dirname + _url) fs.redFileSync는 파일을 읽어주는 것, fs는 파일 시스템의 약자, readFileSync('노드가 실행되는 경로', '인코드');
        //response.end는 아무래도 인자 안에 담긴 정보를 불러오는 것인듯
      });
    });
  } else if (pathName === "/update_process") {
    let body = "";
    request.on("data", (data) => {
      body = body + data;
    });
    request.on("end", () => {
      let post = qs.parse(body);
      let id = post.id;
      let title = post.title;
      let description = post.description;
      fs.rename(`data/${id}`, `data/${title}`, (err) => {
        if (err) throw err;
        fs.writeFile(`data/${title}`, description, "utf8", (err) => {
          if (err) throw err;
          response.writeHead(302, { Location: `/?id=${title}` });
          response.end();
        });
      });
    });
  } else if (pathName === "/delete_process") {
    let body = "";
    request.on("data", (data) => {
      body = body + data;
    });
    request.on("end", () => {
      let post = qs.parse(body);
      let id = post.id;
      let filteredId = path.parse(id).base;
      fs.unlink(`data/${filteredId}`, (err) => {
        if (err) throw err;
        response.writeHead(302, { Location: `/` });
        response.end();
      });
    });
  } else {
    response.writeHead(404);
    response.end("Not Found");
  }
});
app.listen(3000);
