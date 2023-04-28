const multer = require("multer");
// const upload = multer({dest:"uploads/"})

// images 폴더에 진짜 이미지 이름으로 업로드 되도록 하는 것
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, 'public/images/')
    },
    filename : (req,file,cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage});

module.exports = upload;