const multer=require('multer')

const storage= multer.diskStorage({
destination:(req,file,cb)=>{
    cb(null,'./uploads')

},

filename:(req,file,cb)=>{
const date = Date.now()
const randomNumber= Math.ceil(Math.random()*100)

cb(null, `IMG_${date}_${randomNumber}_${file.originalname}`)
}
})

const fileFilter= (req,file,cb)=>{
if(file.mimetype.startsWith('image/')){
    cb(null,true)
}else{
    cb( new Error('only image are allowed'))
}

}

const limits={
    fileSize:1024*1024*10
}

exports.upload= multer({
    storage,
    fileFilter,
    limits
})