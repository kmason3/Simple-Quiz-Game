var express = require('express');
var bodyParser = require('body-parser')
var app = express();


app.use(express.static('public'));
app.use(bodyParser.json())

app.get('/index.htm', function (req,res){
	res.sendFile(__dirname + "/" + "index.htm");
})

app.get('/home', function (req,res){
	res.sendFile(__dirname + "/" + "index.html");
})

app.get('/process_get', function (req,res){
	response = {

		first_name:req.query.first_name,
		last_name:req.query.last_name
	};
	console.log(response);
	var fs = require('fs');
	fs.appendFile("public/test.txt", JSON.stringify(response) + '\n', function(err){
		if(err){return console.log(err);}
		console.log("File Written!");
	});
	//res.end(JSON.stringify(response));
	res.sendFile(__dirname + "/" + "index.html");
})

app.post('/createUser', (req,res)=>{

	store
		.createUser({
			firstName: req.body.fName,
			lastName: req.body.lName
		})
		.then(()=> res.sendStatus(200))

})

var server = app.listen(8086, function(){
	var host = server.address().address
	var port = server.address().port

	console.log("Example app listening at http://%s:%s", host, port)


})
