var express = require('express');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

// router.get("/",(req, res) => {
//   res.json({
//     message: 'success!!',
//   });
// })

// router.post("/main",(req, res) => {
//   const data = req.body.data; 

//   res.send("뮨자열이 응답됩니다");
//   res.json({
//     message: "json 응답",
//   });
//   res.render('index') //html코드 들고올 수 있다
// })

// 실습2
/*
let arr = [];

//GET method
router.get("/read",(req, res) => {
  res.status(200).json({
    message: 'read success!!',
  });
});

//POST method

router.post('/create',(req,res) => {

  // const data = req.body.data; - 아래가 비구조 할당
  const {data} = req.body; 
  arr.push(data);
  res.status(200).json({
    message:'create success',
    result: arr,
  });
})

//PUT method 수정하는 메서드
// update/0 0번째 데이터 수정


router.put('/update/:id',(req,res) => {
  const {id} = req.params;
  const {data} = req.body;
  arr[id] = data;
  res.status(200).json({
    message: 'update success',
    result: arr,
  });
});

//DELETE method

router.delete('/delete/:id',(req,res) => {
  const {id} = req.params;
  arr.splice(id, 1);
  res.status(200).json({
    message:'delete success',
    result: arr,
  })
})
*/

// 실습4
const loginCheck = require('../module/loginCheck');
const upload = require('../module/imgUpload.js')

// 리퀘스트 들어왔을떄 로그인체크 함수 실행하고 (0 -> next함수를 통해서 다음 함수로 / x -> login fail! )

router.get('/',loginCheck, (req,res) => {
  res.status(200).json({
    message: "login success!!"
  });
});

router.post('/upload', upload.single('image'),(req,res)=> {
  const file = req.file;
  console.log(file);
  res.status(200).json({
    message: "upload success!!",
  });
});

module.exports = router;
