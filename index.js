
//vidio link https://youtu.be/seZhGRhbHY0

const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/traniosite', {useNewUrlParser: true, useUnifiedTopology: true});

const TranioSitesSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  address: String,
});

const TranioSitesModel = mongoose.model('traniosites', TranioSitesSchema);

//jb hm  (res) ko chuj krte  h to data ko hm ya to express se ya bongodb se data ko crome pr vejte h or user ko dikhhate h 
app.get('/aboutus', function(req, res){
  res.send("hi i am <b>Raju</b>!!!");
});

//jb hm (req) ko chuj krte h to data ko hm crome se data ko user ke dvara late h apne express ya bongodb me save kr lete h
app.get('/aboutus2', function(req, res){
  var a=req.query.num1;
  var b=req.query.num2;
  res.send("hi i am Raju!!!"+req.query.a+" "+req.query.b);
});


//jb hm yh methad chlate h to eska mtlb ki hm data base se data ko late h or user ko dete h agr hmara data base nhe mlta h to use hm ek err so krte h if mathad ke throw 
app.get('/findname', function(req, res){
  TranioSitesModel.find(function(err, data){
    if(err)
    {
      res.send("findname with error: ");
      console.log(err);
    }
    else
      res.send(data);
  })
});


// url me ase data ko veje=========== ?name=acbxyz&phone=546584
////jb hm yh methad chlate h to eska mtlb ki hm data base se data ko late h or user ko dete h agr hmara data base nhe mlta h to use hm ek err so krte h if mathad ke throw 
app.get('/addname', function(req, res){
  var n = req.query.name;
  var p = req.query.phone;
  var e = req.query.email;
  var a = req.query.address;

  var tranioSitesObj = new TranioSitesModel();
  tranioSitesObj.name=n;
  tranioSitesObj.phone=p;
  tranioSitesObj.email=e;
  tranioSitesObj.address=a;

  tranioSitesObj.save(function(err, data){
    if(err)
    {
      res.send("addname with error: ");
      console.log(err);
    }
    else
      res.send("your data sucece full"+data);
  })
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})