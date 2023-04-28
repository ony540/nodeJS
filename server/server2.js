const http = require('http');

http. //서버 쉽게 구축할 수 있는 패키지
 createServer((req,res) => { //서버를 생성하고, 요청과 응답을 할 수 있는 함수
    if(req.url === "/"){
        res.writeHead(200); //status code?
        res.end("main url");
    } else if (req.url === "/upload"){
        res.writeHead(200);
        res.end("upload url")
    } else if(req.url === "/delete"){
        res.writeHead(200);
        res.end("delete url");
    } else {
        res.writeHead(404);
        res.end("Not found!")
    }
}).listen(3000, () => { //서버만들고 포트 내에서 서버 대기시킬 수 있는 함수
    console.log("3000번 포트 서버 접속 완료")
});

