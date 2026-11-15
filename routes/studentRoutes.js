const router= require('express').Router()
const {createStudent,deleteStudent,allStudent,oneStudent,updateStudent,uploadGallery,
    uploadMultipleImages}=require('../controller/studentController')
const {upload}= require('../middleware/multer')
const{studentValidation,studentUpdateValidation}=require('../middleware/studentValidation')

router.post('/api/createStudent',upload.single('profileImage'),studentValidation,createStudent)
router.delete('/api/deleteStudent/:id',deleteStudent)
router.get('/api/allStudent',allStudent)
router.get('/api/getOne/:id',oneStudent)
router.patch('/api/uploadGallery/:id',upload.array('galleryImage',4),uploadGallery)
router.put('/api/updateStudent/:id',upload.single('profileImage'),studentUpdateValidation,updateStudent)
router.put('/api/uploadMultipleImages/:id',upload.fields([
    { name: 'passportImage', maxCount: 1 },
    { name: 'idCardImage', maxCount: 1 },
    { name: 'profileImage', maxCount: 1 },
    { name: 'galleryImage', maxCount: 4 }
]),uploadMultipleImages)

module.exports=router