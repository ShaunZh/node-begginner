const http = require('http');
const url = require('url');

function start(route, handler) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('request for' + pathname + 'received');

    var content = route(pathname, handler, response);
    
  }
  http.createServer(onRequest).listen(8888);
  console.log('server was started');
}

exports.start = start;
