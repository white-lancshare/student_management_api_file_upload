const {Sequelize}=require('sequelize')

const DBNAME=process.env.DBNAME
const DBUSERNAME=process.env.DBUSERNAME
const DBPASSORD=process.env.DBPASSORD
const DBHOST=process.env.DBHOST


const sequelize= new Sequelize(DBNAME,DBUSERNAME,DBPASSORD,{
    host:DBHOST,
    dialect:"mysql"
})

module.exports=sequelize