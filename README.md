# nodejs
nodejs studying start with 생활코딩

node js 기본

9.URL의 이해
http - 프로토콜 통신 규칙 웹서버와 웹 브라우저가 서로 데이터를 주고받기 위해서 만든 통신 규칙임
ftp라는 것도 잇음 
domain name(host) -  인터넷에 접속되어잇는 각각의 컴퓨터를 호스트라고 한다. 즉, 인터넷에 연결되어있는 컴퓨터를 가리킴
port 번호 - 한대의 컴퓨터 안에 여러개의 서버가 있음 클라이언트가 접속할때 어떤 서버와 접속할지 포트번호로 서버를 정해주는 것
path - 컴퓨터 안에 있는 어떤 디렉터리의 어떤 파일인지
query string - 이걸 변경하면 앞의 파일에 데이터를 전달함 ?로 시작

url을 분석해서 데이터를 추출해야한다. 

Node.js-18.NodeJS-콘솔에서의 입력값
input(= parameter: 입력되는 정보의 형식, argument: 입력된 정보의 실제 값)
process.argv : 배열인데 nodejs 런타임 위치 정보, 실행시킨 파일 경로, 입력값 정보가 이렇게 세가지가 포함되어잇음. 즉, 입력값은 세번째 자리부터 들어감.

fs는 모듈로 FileSystem의 약자로 파일 처리와 관련된 모듈이다. 메소드가 굉장히 많은데 파일 읽기와 쓰기 등이 있다.

Node.js-19.1.App 제작-Not found 구현
Not Found는 파일을 찾지 못했을 때 나타나게 하는 화면으로 nodejs에서 파일을 읽어오지 못하면 출력한다.
url.parse(_url, true)에는 pathname이 있는데 /로 시작한다. /로 시작하고 그 뒤에 바로 queryString이 오면 정상작동하는데
그렇지 않으면 잘못된 루트로 접근한 것으로 Not Found를 출력하게된다. 
이걸 if문으로 구현하였다.

Node.js-19.2.App 제작-홈페이지 구현(홈)
홈페이지랑 queryString이 들어오는 페이지들이랑 구분해야함
홈페이지는 /가 끝이고 다른 것들은 뒤에 queryString이 더 오니
그걸로 구분 
queryString은 queryData.id이니 이걸 지정한 title이 있으면 queryString이 있는 페이지이고
아니면 홈페이지로 구분

Node.js-23.Node.js에서 파일목록 알아내기
data 디렉터리에 파일이 추가, 수정, 삭제 되면 node.js로 알아낸다.
fs.readdir을 쓰자 dir을 읽는것
문법 : fs.readdir(확인할 디렉토리주소, (error, filelist) => {
console.log(filelist);
});

이걸 사용하여 파일이 하나 더 생겼을때 리스트를 자동으로 추가해주는걸 만듬
fs.readdir은 array로 나오기때문에 각각의 것들에 접근해서 목록으로 만들어줌
생활코딩에선 while문을 사용하여 각각의 것들을 string으로 만들어줬지만
나는 .map을 사용하여 배열의 각 요소들을 하나씩 바꿔줌 그리고 출력할 땐 join을 사용하여 string으로 바꿔줌
그리고 template에서 출력해줌

Node.js26.App 제작-함수를 이용해서 정리 정돈하기
반복되는 함수들이 꽤나 있음
function을 이용해서 코드를 확 줄여줌
li, body를 함수로 만들어주고 반환값을 본 코드에 넣어줌 

Node.js-28.1.Nodejs에서 동기와 비동기 1
synchronous vs asynchronous
synchronous : 전면처리(동기적)
asynchronous : 후면처리(비동기적), 복잡함
node.js는 비동기적 처리하기 아주 좋음 

Node.js-28.2.Nodejs에서 동기와 비동기 2
함수마다 Sync가 붙은 것은 동기적인 것으로 작업이 끝난 후 return값을 반환한다. 다음 코드는 이 함수가 종료된 다음에 실행된다. 또한 callback함수 즉, 함수 실행후 진행할 값을 입력해줘야한다. 
Sync가 붙지 않은 것은 비동기적인 것으로 후면작업으로 진행되며 다음 코드는 이것과 상관없이 시작한다. callback함수를 적을 필요가 없다.

Node.js-28.3.JavaScript-callback
콜백이란것은 함수가 함수를 부르는 것을 말함. 즉, 1번함수가 2번함수를 부르는데 1번함수가 끝나면 바로 진행될 2번함수를 부르는 것임.
그러니 1번함수가 인자로 함수를 인자로 받고 1번함수 안에서 2번함수를 실행시키는 것임

Node.js-29.Node.js의 패키지 매니저와 PM2
NPM : nodejs에서 광범위하게 사용하는 패키지매니저
pm2 : 이걸 이용하면 실행중인 프로그램 nodejs를 이용하여 만든 프로그램을 꺼지면 다시 켜주기도하고, 파일이 수정되면 자동으로 프로그램을 껏다켜주기도함
npm으로 pm2설치(패키지 매니저로  패키지 설치)

pm2 start main.js --watch : 파일이 수정되면 자동으로 node를 껏다켜줌
pm2 log : 문제가 생기면 여기에 저장해놓음
pm2 monit : 현재 실행중인 서버들을 볼수 있음
pm2 list : 현재 서버의 상태에 대해서 볼수 있음

Node.js-30.HTML-form
글쓰기 본문은 textarea(여러줄 입력가능)
입력되는 여러 값들은 name으로 구분해서 
form의 action에 담긴 주소로 제출해주면 queryString이 만들어진다.
즉, form이라는 태그는 form안에 있는 각각의 컨트롤들의 사용자가 입력한 정보를
submit버튼을 눌렀을때 액션속성이 가리키는 서버로 queryString의 형태로 데이터를 전송하는 기능임

하지만 파일을쓰는것을 만드려고 하는건데 주소에 글쓰는 데이터가 포함되어있다면 서버의 정보가 노출되거나 변경될 가능성이 있음. 즉, 안좋음
파일을 읽을때(서버로부터 사용자가 데이터를 가져올때)는 get방식으로 queryString에 데이터가 들어가면 좋음
하지만 파일에 데이터를 쓰거나, 수정하거나, 삭제하는 행위를 할때는 필요한 데이터를 url로 보내면 안됨, 눈에 보이지 않는 방식으로 보내는
post방식을 사용해야함. -> form에 method="post" -> 이렇게하면 아주 큰 데이터를 보낼수도 있음(get으로 하면 큰 데이터 못보냄)

createServer(function(request, response) 이 콜백함수를 nodejs가 호출함
여기엔 request, response 인자 두개를 주는데
request는 요청할때 웹브라우저가 보낸 정보를 담은것이고
response는 응답할때 웹서버가 웹브라우저에 전송할 정보를 담는것임

request.on 데이터 : 웹브라우저가 post방식으로 데이터를 전달할때  데이터가 엄청 많으면 그 데이터를 한번에 처리하지 못함
그래서 nodejs에서 post로 전송되는 데이터가 많을 경우를 대비해서 사용하는 것, 
콜백함수로 데이터의 양을 나눠서 서버가 수신할때 마다 콜백함수를 호출하면서 데이터라는 인자로 수신한 정보를 주기로 함.

qs : node.js가 가지고있는 querystring이라는 모듈임
qs.parse();로 이전에 받았던 데이터 string을 객체로 만들수 있음

즉, post방식으로 받은 데이터를 실제로 사용할 수 있게 구현하는 단계는 이렇다.
let body = "";
    request.on("data", (data) => {
      body = body + data;
    });
    request.on("end", () => {
      let post = qs.parse(body);
      let title = post.title;
      let description = post.description;
    });

Node.js-33.App 제작-파일생성과 리다이렉션
post방식으로 전송된 데이터를 데이터 디렉토리안에 파일의 형태로 저장하는 법을 탐구한다.
fs.writeFile로 파일을 새로 작성한다. 형식은 fs.writeFile(`경로/파일이름`, 파일내용, "utf8", 콜백함수(err){
여기에 파일을 저장하고나서 저장한 파일을 볼 수 있는 페이지로 이동해야하는데 redirect로 구현한다. 
response.writeHead(302, {Location: `원하는 파일 queryString`}을 해주면 된다. 302가 redirect해주는 부분이다. 전에 사용한 200은 성공 여부를 알려주는 것이었다.
});

Node.js-34.App 제작-글수정-수정링크생성
업데이트 링크를 pathname이 queryString일 때만(홈페이지가 아닐때에만) 나오게끔 설정해줌

Node.js-35.App 제작-글수정-수정할 정보 전송
내용을 수정해줄 수 있게 form으로 내용들을 불러오기위해 readFile을 하고 input이랑 textarea에 읽어온 파일의 내용들을 넣어줌.
그리고 이전에 파일 명을 찾아갈 수 있도록 input폼을 하나 더 만들어서 히든으로 만들고 value에 기존 title을 넣어줌

Node.js-36.App 제작-글수정-파일명 변경, 내용저장
update에서 submit 했을때 진행할 페이지 /update_process를 만들어줌
경로 /update_process를 따로 만들어주고 거기선 post방식으로 받은 데이터를 저장하게끔 해야함
그리고 파일명을 바꾸는 경우도 있으니 fs.rename(oldpath, newpath, callback)함수를 써준다.
그리고 fs.writeFile로 받아온 데이터를 새로 저장해준다.

Node.js-37.App 제작-글삭제-삭제버튼 구현
update옆에 버튼만 구현해주었음 삭제는 링크로 보내면 안되기 때문에 form으로 submit value="delete"버튼을 만들고 
template에 추가해줬음 form action은 delete_process, method는 post로 설정해줌

Node.js-38.App 제작-글삭제 기능 완성
/delete_process에서 작동할 기능을 구현함
id값을 받아와서 바로 삭제하는 기능
post에서 값을 받아와서 fs.unlink(데이터경로, 콜백)함
끝나고 그냥 홈페이지로 보내버림 끝

Node.js-41.JavaScript-객체-값으로서 함수
let f = function(){
console.log(1+1);
console.log(1+2);
}
let a = [f];
a[0](); 
이렇게 배열로 함수 사용 가능
let o = {
func:F
}
o.func();
이렇게 객체의 프로퍼티로 함수 사용가능 
즉, 함수는 값이기도 함.

Node.js-42.JavaScript-객체-데이터와 처리 방법을 담는 그릇으로서 객체
함수내에서 프로퍼티나 함수를 부르고 싶을땐 this를 사용.

Node.js-44.Node.js 모듈의형식
객체가 많아지면 정리하는것 : 모듈(가장 큰 도구, 틀)
모듈을 이용하면 객체등을 파일로 쪼개서 외부로 독립시킬수 있음
let M = {
  v: "v",
  f: function () {
    console.log(this.v);
  },
};
module.exports = M : 모듈이 담겨있는 파일에 있는 여러 기능들중 M이 가리키는 객체를 모듈 밖에서 사용할 수 있도록 exports하는것
외부 다른 파일에서 let part = require('./모듈이 있는 파일') 
part.f();하면 사용가능

Node.js-45.App 제작 - 모듈의 활용
main.js에 쓰였던 template를 따로 파일에 담아서 저장후 main.js에서 require해서 사용

Node.js-46.App 제작-입력정보에 대한 보안
오염된 정보가 들어와서 파일에 접근하는 코드를 건드리면 파일에 담긴 정보나 그 상위 파일들에 대한 정보들도 나올수 있음
그렇기에 연결고리를 끊어줘야함 -> 경로를 달리해줘야함.
path.parse().base를 이용하여 파일 하나만을 가리킬 수 있음.

Node.js-47.1.App제작-출력정보에 대한 보안
사용자가 입력한 오염된 정보 중 오염된 정보가 나가서 사용자에게 피해를 끼칠수 있음
html 스크립트를 만들수 있으니 <>를 바꿔줘서 기능을 비활성화 시킬수 있음

Node.js-47.2.App제작-출력정보에 대한 보안
npm-sanitize-html 을 사용할것
npm : 애플리케이션을 npm으로 관리하게됨
npm init으로 패키지를 만들고
npm install -S sanitize-html 으로 sanitize-html을 설치해줌
package.json의 dependencies를 보면 sanitize-html가 있는데
이 파일은 sanitize-html에 의존한다는 것임.

Node.js-47.3.App제작-출력정보에 대한 보안
main.js에서 sanitize-html을 require해줌
그리고 제목이나 내용등에 sanitize해줌
let sanitizedTitle = sanitizeHtml(title);
let sanitizedData = sanitizeHtml(data);
이런식으로 이렇게하면 사용자가 글을 작성할 때 태그를 허용 안시켜줌

Node.js-48. API와 CreateServer
함수를 만든 개발자들과 그걸 사용하는 사용자들과의 약속 : interface
API(Application Programming Interface) : 애플리케이션을 프로그래밍하기 위해 제공되는 인터페이스 

API만 알면 기능 다 쓸수 있음
nodejs가 가진 기본적인 모듈들 공부, npm과같은 패키지 매니저를 이용해서 다운받아서 사용할 수 있는 모듈들이 뭐가 있는지 공부
nodejs awesome (노드말고도 검색해서 찾아보기) 찾아봐서 주목받는 모듈들을 사용하기
database : mongoDB공부
framework : 공통적인 부분(사용자 요청 처리, 인증, 보완, 파일 서비스)을 미리 구현해 놓은것

Node.js-49.부록 - pm2 보충학습
pm2 list : 현재 프로세스들 리스트
pm2 kill : 현재 켜진 프로세스들 다 끔
pm2 start main.js --watch --no-daemon : daemon아니게 실행, log까지 볼 수 있음
daemon : 백그라운드로 실행되는 프로그램들
pm2 start main.js --watch --ignore-watch="data/*" --no-daemon : --ignore-watch="data/*" 이것은 데이터 디렉토리의 모든 파일들에 대해서 watch하는걸 무시한다고 하는것임

npm : nodejs의 의존성과 버전관리, 패키지관리를 위한 패키지 매니저임
npx : node의 패키지를 실행시키는 하나의 도구,  기본적으로 실행되어야할 패키지가 경로에 있는지 먼저 확인한다. 경로에 제대로 있다면, 그대로 실행한다. 그렇지 않다면 패키지는 설치되어 있지 않다는 걸 의미하고, npx가 최신 버전의 패키지를 설치를 한 후에 실행한다. 설치여부확인 후 설치되어있지 않아도 설치하지 않고 실행만 할 수 도 있다. 그리고 로컬 경로에 있는 패키지를 좀 더 편하게 사용할 수 있따.
