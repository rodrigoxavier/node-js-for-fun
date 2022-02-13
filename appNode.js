
const http = require('http');

const server = http.createServer((request, response) => {
	
	const url = request.url;
	
	if (url === '/') {
		
		response.setHeader('Content-Type', 'text/html');
		
		response.write('<html>', 'utf8', () => {});
		response.write('<head><title>Node App</title></head>', 'utf8', () => {});
		response.write('<body><h1>Welcome to Node.js!</h1></body>', 'utf8', () => {});
		response.write('</html>', 'utf8', () => {});
		
		response.end();
	}
});

server.listen(3000, function () {
    console.log("Express server listening on port 3000");
});