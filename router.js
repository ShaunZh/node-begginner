function route(pathname, handler, response) {
  console.log('About to route a request for ' + pathname);
  if (typeof handler[pathname] === 'function') {
    handler[pathname](response);
  } else {
    console.log('No request handler found for ' + pathname);
    response.writeHead('200', {'Content-Type':'text/plain'});
    response.write(response);
    response.end();
  }
}

exports.route = route;
