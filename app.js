var express = require('express');
var app = express();
var server = require('http').Server(app);
var bandData = require('./const')


const port = process.env.PORT || 8080;



// set pug as template engine
app.set('view engine', 'pug');
app.set('views','./views');

// on home page, serve index.pug and constants
app.get('/', function (req, res) {
  res.render('index', {
  	ctaData: bandData.ctaList,
  	recordData: bandData.recordList,
  	tourData: bandData.tourList,
  	reviewData: bandData.reviewList,
  	blogData: bandData.blogList
  })
})

// set route to images folder
app.use(express.static('img'));


// port listener
server.listen(port, function(){
	console.log('listening on ' + port);
});