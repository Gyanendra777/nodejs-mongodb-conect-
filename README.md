# nodejs-mongodb-conect-
https://youtu.be/WXgvYhk7Tu8

sbse phle hm comd me ye path likhte h 
  
C:\MongoDB\bin

=>usi kmand me 

mongod 

=>dusre coment open krte h 

mongo

=>data bace creat

=>use data bace ka name 

use _____traniosite 

=>data bace calation  ek deta pass krna 
db.createCollection("biodata")

=>ap kis data bace pr kam kr rhe ho  
db

=>data base ko delet krna 
db.dropDatabase()

=>js deta base me jana chahte h usp jane ke liye
use traniosite

=>js v data base ke andr ka data delet kran  h 
db.data base ka name .drop()

=>data bace ke andr ke data ko dekhne ke liye
show collections


=>fist data ko kese inter krte h ___insertOne   isme hm ek abject creat krte h {}
db.biodata.insertOne({"_id":1,"name":"raju"})

=>fist data ko kese inter krte h ___insertMany   isme hm many object creat krte h ([{},{}])

db.biodata.insertMany([{_id:2,name:"pho",_id:3,name:"mobrick"}])


