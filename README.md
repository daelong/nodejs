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
