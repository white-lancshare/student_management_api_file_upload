require('dotenv').config()

const DBNAME=process.env.DBNAME
const DBUSERNAME=process.env.DBUSERNAME
const DBPASSORD=process.env.DBPASSORD
const DBHOST=process.env.DBHOST


module.exports={
  "development": {
    "username": DBUSERNAME,
    "password":DBPASSORD,
    "database":DBNAME,
    "host": DBHOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
