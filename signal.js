const express = require('express');
const app = express();
var bodyParser = require("body-parser");
const fs = require('fs'); 
const gTTS = require('gtts');
 
let server;
let port;
  const http = require('http');
  server = http.createServer(app);
  port = 7777;
const io = require('socket.io')(server);
app.use(express.static(__dirname + '/signal'));

server.listen(port, () => console.log(`Server is running on port ${port}`));

var socketServer = io.listen(server, {"log level":1});

// configure server to serve static files from /js and /css:
  app.use('/js', express.static(__dirname + '/js'));
  app.use('/css', express.static(__dirname + '/css'));

// respond to web GET requests with the index.html page:
app.get('/', function (request, response) {
  response.sendFile(__dirname + '/index.html');
});

/*==============================
 envoyer le nom et les questions
 =================================*/
 app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());
app.get('/video0', function (req, res) {
  res.sendFile(__dirname + '/signal/video0.html')
})
app.post('/register', function (req, res) {
   var username = req.body.username;
   var html = 'Hello:' + username;
   
fs.writeFileSync('signal/data/nom.txt', username + '\n', {'flag':'w'}, function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});
const accueil = fs.readFileSync('signal/data/accueil.txt', 'utf8');
 // append data to file
fs.appendFileSync('signal/data/nom.txt',accueil, 'utf8');
        console.log("nom is appended to file successfully.")

const text = fs.readFileSync('signal/data/nom.txt', 'utf8');

var gtts = new gTTS(text, 'fr');
gtts.save('signal/data/nom.mp3', function (err, result) {
  if(err) { throw new Error(err) }
  console.log('Success! Open file signal/data/nom.mp3 to hear result.');
  res.redirect('/video0');
   console.log(req.body);
});
});
  app.get('/video1', function (req, res) {
  res.sendFile(__dirname + '/signal/video1.html')
})
  app.post('/register1',function(req,res){
   var question1 = req.body.question1;
   var html = 'Hello:' + question1;
   

fs.writeFileSync('signal/data/reponse1.txt', question1 + '\n', {'flag':'w'}, function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});
 
const text = fs.readFileSync('signal/data/reponse1.txt', 'utf8');

var gtts = new gTTS(text, 'fr');
gtts.save('signal/data/reponse1.mp3', function (err, result) {
  if(err) { throw new Error(err) }
  console.log('Success! Open file signal/data/reponse1.mp3 to hear result.');
  res.redirect('video1');
   console.log(html);
});
});
   app.get('/video2', function (req, res) {
  res.sendFile(__dirname + '/signal/video2.html')
})
  app.post('/register2',function(req,res){
   var question2 = req.body.question2;
   var html = 'Hello:' + question2;

fs.writeFileSync('signal/data/reponse2.txt', question2 + '\n', {'flag':'w'}, function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});
  
const text = fs.readFileSync('signal/data/reponse2.txt', 'utf8');

var gtts = new gTTS(text, 'fr');
gtts.save('signal/data/reponse2.mp3', function (err, result) {
  if(err) { throw new Error(err) }
  console.log('Success! Open file signal/data/reponse2.mp3 to hear result.');
  res.redirect('video2');
   console.log(html);
});
});
   app.get('/video3', function (req, res) {
  res.sendFile(__dirname + '/signal/video3.html',{acceptRanges: false})
})
  app.post('/register3',function(req,res){
   var question3 = req.body.question3;
   var html = 'Hello:' + question3;
   
 
fs.writeFileSync('signal/data/reponse3.txt', question3 + '\n', {'flag':'w'}, function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});

const text = fs.readFileSync('signal/data/reponse3.txt', 'utf8');

var gtts = new gTTS(text, 'fr');
gtts.save('signal/data/reponse3.mp3', function (err, result) {
  if(err) { throw new Error(err) }
  console.log('Success! Open file signal/data/reponse3.mp3 to hear result.');
  res.redirect('video3');
   console.log(html);
});
});

   app.get('/video4', function (req, res) {
  res.sendFile(__dirname + '/signal/video4.html')
})
  app.post('/register4',function(req,res){
   var question4 = req.body.question4;
   var html = 'Hello:' + question4;
   

fs.writeFileSync('signal/data/reponse4.txt', question4 + '\n', {'flag':'w'}, function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});
  const text = fs.readFileSync('signal/data/reponse4.txt', 'utf8');

var gtts = new gTTS(text, 'fr');
gtts.save('signal/data/reponse4.mp3', function (err, result) {
  if(err) { throw new Error(err) }
  console.log('Success! Open file signal/data/reponse4.mp3 to hear result.');
  res.redirect('video4');
   console.log(html);
});
});

   app.get('/video5', function (req, res) {
  res.sendFile(__dirname + '/signal/video5.html')
})
  app.post('/register5',function(req,res){
   var question5 = req.body.question5;
   var html = 'Hello:' + question5;
  

fs.writeFileSync('signal/data/reponse5.txt', question5 + '\n', {'flag':'w'}, function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});
  const text = fs.readFileSync('signal/data/reponse5.txt', 'utf8');

var gtts = new gTTS(text, 'fr');
gtts.save('signal/data/reponse5.mp3', function (err, result) {
  if(err) { throw new Error(err) }
  console.log('Success! Open file signal/data/reponse5.mp3 to hear result.');
   res.redirect('video5');
   console.log(html);
});
});

   app.get('/video6', function (req, res) {
  res.sendFile(__dirname + '/signal/video6.html')
})
  app.post('/register6',function(req,res){
   var question6 = req.body.question6;
   var html = 'Hello:' + question6;
  
fs.writeFileSync('signal/data/reponse6.txt', question6 + '\n', {'flag':'w'}, function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});
const text = fs.readFileSync('signal/data/reponse6.txt', 'utf8');

var gtts = new gTTS(text, 'fr');
gtts.save('signal/data/reponse6.mp3', function (err, result) {
  if(err) { throw new Error(err) }
  console.log('Success! Open file signal/data/reponse3.mp3 to hear result.');
   res.redirect('video6');
   console.log(html);
});
});

  app.get('/videoftts', function (req, res) {
  res.sendFile(__dirname + '/signal/videoftts.html')
})
  app.post('/registerf',function(req,res){
   var futur = req.body.futur;
   var html = 'Hello:' + futur;

fs.writeFileSync('signal/data/futur.txt', futur + '\n', {'flag':'w'}, function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});
  const text = fs.readFileSync('signal/data/futur.txt', 'utf8');

var gtts = new gTTS(text, 'fr');
gtts.save('signal/data/futur.mp3', function (err, result) {
  if(err) { throw new Error(err) }
  console.log('Success! Open file signal/data/reponse3.mp3 to hear result.');
  res.redirect('videoftts');
   console.log(html);
});
});
