module.exports = {
  HTML: function (title, li, body, control) {
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
      ${control}
      ${body}
      </p>
    </body>
    </html>
      `; // respose.end();에 넣어줄 값을 아예 html로 작성해서 파일로 만들어서 넣어준 것 거기에 ${}로 인자값을 전달해서 동적으로 변화시킴
  },
  list: function (filelist) {
    let li = `<ul>`;
    li = filelist
      .map((data) => `<li><a href="/?id=${data}">${data}</a></li>`)
      .join(" ");
    li = li + `</ul>`;
    return li;
  },
};
