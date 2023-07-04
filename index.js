var http = require('http');

// Create a server object:
http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'application/json'); // Set the response header to indicate JSON content

  var body = ''; // Variable to store the request body
  
  req.on('data', function (chunk) {
    body += chunk; // Concatenate the incoming data chunks
  });
  
  req.on('end', function () {
    var responseObject = {
      message: 'Hello World!',
      headers: req.headers,
      body: body // Add the request body to the response object
    };
  
    res.end(JSON.stringify(responseObject)); // Convert the object to JSON string and send as the response
  });
}).listen(3000); // The server object listens on port 8080
