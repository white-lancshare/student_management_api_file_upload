const joi=require('joi')

const studentValidation=async(req,res,next)=>{
const schema=joi.object({
firstName:joi.string().trim().required().pattern(new RegExp('^[A-Za-z]{3,}$')).messages({
"string.empty":"you must input a value",
"string.pattern.base":"please input a valid "
}),
lastName:joi.string().trim().required().pattern(new RegExp('^[A-Za-z]{3,}$')).messages({
"string.empty":"you must input a value",
"string.pattern.base":"please input a valid "
}),
email:joi.string().email().trim().required().pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')).messages({
"string.empty":"you must input a value",
"string.pattern.base":"please input a valid ",
"string.email":"you must input a valid image"
}),
phoneNumber:joi.string().trim().required().pattern(new RegExp('^\\+?[0-9]\\d{1,14}$')).messages({
"string.empty":"you must input a value",
"string.pattern.base":"please input a valid "
})
})

const {error}=schema.validate(req.body)

if(error){
   return  res.status(400).json({
     message:"there is a server error",
        data:error.details[0].message,
        val:error
})
}

next()
}


const studentUpdateValidation=async(req,res,next)=>{
const schema=joi.object({
firstName:joi.string().trim().optional().pattern(new RegExp('^[A-Za-z]{3,}$')).messages({
"string.empty":"you must input a value",
"string.pattern.base":"please input a valid "
}),
lastName:joi.string().trim().optional().pattern(new RegExp('^[A-Za-z]{3,}$')).messages({
"string.empty":"you must input a value",
"string.pattern.base":"please input a valid "
}),
email:joi.string().email().trim().optional().pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')).messages({
"string.empty":"you must input a value",
"string.pattern.base":"please input a valid ",
"string.email":"you must input a valid image"
}),
phoneNumber:joi.string().trim().optional().pattern(new RegExp('^\\+?[0-9]\\d{1,14}$')).messages({
"string.empty":"you must input a value",
"string.pattern.base":"please input a valid "
})
})

const {error}=schema.validate(req.body)

if(error){
   return  res.status(400).json({
     message:"there is a server error",
        data:error.details[0].message,
        val:error
})
}

next()
}

module.exports={studentValidation,studentUpdateValidation}