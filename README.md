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


