
//vidio link https://youtu.be/seZhGRhbHY0

const express = require('express')
const app = express()
const port = 3000
// getting-started.js
const mongoose = require('mongoose');
const bodyparser = require('body-parser')
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

const kittySchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  address: String,
});

const Kitten = mongoose.model('Kitten', kittySchema);

app.post('/contact', function (req, res) {
  var myData = new contact(req.body);
  myData.save().then(()=>{
    res.send('this item has been saved to the database')
  }).catch(()=>{
      res.status(400).send("iteme was not saved to ths database")
  })
  // res.status(200).render('contact.pug')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})