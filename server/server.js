// const http = require('http');

// http.createServer((req,res) => {
//     res.writeHead(200,{'Content-Type': "text/html"}) //제대로 통신됐을때 200 (404같은 것)
//     res.end('<p>Hello World</p>');  // 사용자에게 전달
// }).listen(3000, () => { //포트번호
//     console.log("3000번 포트 서버 접속 완료")
// });

// 로컬호스트 - 현재 컴퓨터의 내부 주소 (서버개발 테스트용으로 많이 쓰임)
//127.0.0.1 같은 의미 IP(internet protocol)이다. 이런 주소를 통해서 접근할 수 있는것

// 3000번 포트 - 서버 내의 프로세스를 구분하는 번호
// 서버에서는 다양한 일을 처리 (http - 일반 서버 접속 /  db 접근 / https / ftp 등의 일을함)
//각각의 기능을 접근할떄 각각의 포트번호가 있음