const http = require('http');
const url = require('url');

function start(route, handler) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('request for' + pathname + 'received');

    route(pathname, handler);
    response.writeHead('200', {'Content-Type':'text/plain'});
    response.write('hello nodejs');
    response.end();
  }
  http.createServer(onRequest).listen(8888);
  console.log('server was started');
}

exports.start = start;
