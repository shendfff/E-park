var express = require('express');
var app = express();
app.all('/getData', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.post('/', function(req, res){
  if (carId = "asdasdfasdasdf") {
      res.send({
        name:"Vagor",
        carnum:12345
      });
  }
});

// route
app.post('/getData', function(req, res){
  if (req.data.carId = "asdasdfasdasdf") {
      res.send({
        name:"Vagor",
        carnum:12345
      });
  }
});

// route
app.get('/getData', function(req, res){
  res.send('get /getData = hello world');
});

app.listen(3000,function () {
  console.log('listening port 3000');
});
