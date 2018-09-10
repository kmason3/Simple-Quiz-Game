var http = require('http');
var fs = require('fs');
//var url = require('url');

http.createServer(function (req, res) {
	fs.readFile('admin.html',function(err,data){

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
	//res.writeHead(200, {'Content-Type': 'text/html'});
	//res.write(req.url);
	//var q = url.parse(req.url, true).query;
	//var txt = q.year + " " + q.month;
	//res.end(txt);
	
}).listen(8086);


