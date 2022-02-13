
// This file contains the same code of the previous gist.
// with a little bit enhancement.

const http = require('http');

const server = http.createServer((request, response) => {
	
	// The feature to handle the request and send back response
	// starts from here.
	
	// Let's declare a constant with name "url". It will store the 
	// URL of the page that the user is accessing.
	
	const url = request.url;
	
	// Here we check if the requested URL is the root of the
	// domain or "/". If so, it will send a customised response.
	
	if (url === '/') {
		
		// set up the Headers to be sent back.
		
		response.setHeader('Content-Type', 'text/html');
		
		// Write the String data to be send back. response.write() method has three
		// parameters. The first one is "chunk", the second one is "character encoding",
		// and the third one is "callback" function.
		
		// Chunk can be a string or a buffer. If chunk is a string, the second parameter 
		// specifies how to encode it into a byte stream. Callback will be called when 
		// this chunk of data is flushed.

		// The first time response.write() is called, it will send the buffered header 
		// information and the first chunk of the body to the client. The second time 
		// response.write() is called, Node.js assumes data will be streamed, and sends 
		// the new data separately. That is, the response is buffered up to the first 
		// chunk of the body.
		
		response.write('<html>', 'utf8', () => {});
		response.write('<head><title>Node App</title></head>', 'utf8', () => {});
		response.write('<body><h1>Welcome to Node.js!</h1></body>', 'utf8', () => {});
		response.write('</html>', 'utf8', () => {});
		
		// The res.end() function is used to end the response process. The application
		// will send back the response from here. It will not proceed further to check
		// other codes after it.
		
		response.end();
	}
});

server.listen(3000, function () {
    console.log("Express server listening on port 3000");
});