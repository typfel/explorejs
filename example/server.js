var connect = require("connect");
var fs		= require("fs");

connect.createServer()
	.use(connect.static(__dirname + '/www'))
	.use(index)
.listen(3000);

function index(req, res, next) {
	fs.readFile('www/index.html', function (err, data) {
		if (err) throw err;
		res.writeHead(200, { 'Content-Type': 'text/html'});
		res.end(data);
	});
}
