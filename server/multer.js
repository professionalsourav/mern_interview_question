import multer from "multer";
import path from "path";

//set up storage

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "./read")
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }

});

// initialize multer with storage

const upload = multer({storage: storage});


export default upload

