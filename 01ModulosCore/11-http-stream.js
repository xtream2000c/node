const http = require('http').createServer(webServer),
    fs = require('fs'),
    index = fs.createReadStream('recursos/index.html');

function webServer(req, res) {

  res.writeHead(200, {'Content-Type':'text/html'});
  index.pipe(res);

};

http.listen(3000)

console.log('Servidor web en http://localhost:3000')