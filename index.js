// getting-started.js
const mongoose = require('mongoose');

// yha pr jo v ap localhost/______ ke bad likhate h v mongodb me ak data base bn jata h 
mongoose.connect('mongodb://localhost/traniosite', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  // we're connected!
  console.log("we are connected id/ ")
});

const kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function () {
  const greeting = "my name is " + this.name 
  // console.log(greeting);
}

const traniosite = mongoose.model('traniosite', kittySchema);

const gyanendra = new traniosite({ name: 'gyanendra dubey' });


gyanendra.save(function (err, gyanendra) {
  if (err) return console.error(err);
  // gyanendra.speak();
});

traniosite.find( {nma:"gyanendra"},function (err, traniosites) {
  if (err) return console.error(err);
  console.log(traniosites);
})