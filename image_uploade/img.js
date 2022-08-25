const router = require('express').Router();
const path = require('path');
const multer = require('multer')


const storage = multer.diskStorage({
    destination : (req,files,cb)=>{
        cb(null,'upload')
    },
    filename : (req,file,cb)=>{
        console.log("file name",file.originalname);
        cb(null,Date.now() + '_' + file.originalname)
    }
})
//multiple image upload
// const upload = multer({storage:storage}).array('file',6);

router.post('/upload',async(req,res)=>{
  try {
    const upload = await multer({storage:storage}).single('file');
    upload(req,res,(err)=>{
        if(!req.file){
            res.json({"err":"please select your file"})
        }else if(err instanceof multer.MulterError){
            res.json({"mul_err":err})
        }else if(err){
            res.json({"post_err":err.message})
        }else{
            console.log(req.file);
            res.json({status:"success",})
        }
 
    })
  } catch (err) {
    res.json({"err":err.message})
  }

})





module.exports = router
