const server = require('./server');
const router = require('./router');
const requestHandler = require('./requestHandler')

const handler = {};
handler['/'] = requestHandler.start;
handler['/start'] = requestHandler.start;
handler['/upload'] = requestHandler.upload;

server.start(router.route, handler);
