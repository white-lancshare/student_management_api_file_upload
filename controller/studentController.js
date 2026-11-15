const console = require('console')
const {student}=require('../models')
const fs=require('fs')

exports.createStudent=async(req,res)=>{
try{
 const {firstName,lastName,email, phoneNumber}=req.body
 console.log( 'data ',phoneNumber,firstName,lastName,email)

 const profileImage=req.file.path

const created= await student.create({
    firstName,lastName,email, phoneNumber,profileImage
})

res.status(201).json({
    message:'student created successfully',
    data:created
})


}catch(e){
    res.status(500).json({
        message:'there is a server error',
        data:e.message
    })
}

}

exports.deleteStudent= async(req,res)=>{
try{
 const id= req.params.id
 const finder= await student.findByPk(id)
 if(!finder){
    return res.status(404).json({
        message:'student with this id not found'
    })
 }

 const oldpath= fs.unlinkSync(finder.profileImage)


 if(finder.galleryImage.length>0){
    finder.galleryImage.forEach(element => {
         fs.unlinkSync(element)
    });
   
 }
 if(finder.passportImage.length>0){
    fs.unlinkSync(finder.passportImage)
 }
 if(finder.idCardImage.length>0){
     fs.unlinkSync(finder.idCardImage)
 }

 await finder.destroy()


 res.status(200).json({
    message:"user deleted successfully",
   
 })
}catch(e){
       res.status(500).json({
        message:'there is a server error',
        data:e.message
    })
}

}

exports.allStudent=async(req,res)=>{
 try{
    const all= await student.findAll()

    res.status(200).json({
        message:`the number of student found is ${all.length}`,
        data:all
    })

 }catch(e){
    res.status(500).json({
        message:'there is a server error',
        data:e.message
    })
 }
}

exports.oneStudent=async(req,res)=>{
try{
    const id=req.params.id

    const finder= await student.findByPk(id)
    if(!finder){
        return res.status(404).json({
            message:'user with the  provided id does not exist'
        })
    }

    res.status(200).json({
        message:'student found',
        data:finder
    })
}catch(e){
        res.status(500).json({
        message:'there is a server error',
        data:e.message
    })
}
}

exports.updateStudent=async(req,res)=>{
    try{
        const id=req.params.id
        const finder= await student.findByPk(id)

        if(!finder){
            return res.status(404).json({
                message:'this id does not exist'
            })
        }
        const {firstName,lastName,email, phoneNumber}=req.body

        const data={
            firstName,lastName,email, phoneNumber
        }

        if(req.file){
            const oldPath= finder.profileImage
            fs.unlinkSync(oldPath)
            const newPath=req.file.path
            data.profileImage=newPath
        }

const update=await student.update(data,{where:{id}})

  res.status(200).json({
    message:'user updated successfully',
    data:update
  })


    
    }catch(e){
        res.status(500).json({
            message:'there is a server error',
            data:e.message
        })
    }
}

exports.uploadGallery=async(req,res)=>{
try{
        const id=req.params.id
        const finder= await student.findByPk(id)

        if(!finder){
            return res.status(404).json({
                message:'this id does not exist'
            })
        }
       const file= req.files
        const data={}

        const galleryImage=req.files.map((e)=>e.path)
      data.galleryImage=  galleryImage.concat(finder.galleryImage)
      
const update=await student.update(data,{where:{id}})


res.status(200).json({
    message:'gallery uploaded successfully'
})



}catch(e){
       res.status(500).json({
            message:'there is a server error',
            data:e.message
        })
}
}

exports.uploadMultipleImages=async(req,res)=>{
try{
    const id=req.params.id
    const finder= await student.findByPk(id)
    if(!finder){
        return res.status(404).json({
            message:'this id does not exist'
        })
    }
    const {
        passportImage ,
      idCardImage,
      profileImage ,
      galleryImage
    }= req.files

 const data={}


    data.passportImage = passportImage[0].path;
    console.log(passportImage[0])
    data.idCardImage = idCardImage[0].path;
    data.profileImage = profileImage[0].path;
    data.galleryImage = galleryImage.map(file => file.path);

    const update=await student.update(data,{where:{id}})

    res.status(200).json({
        message:'images uploaded successfully',
        data:update
    })
}catch(e){
    res.status(500).json({
        message:'there is a server error',
        data:e.message
    })
}

}