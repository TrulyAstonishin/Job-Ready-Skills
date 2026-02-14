const http = require('http');
const server = http.createServer((request, response) => {
    // code inside
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('🏃🫎🫱🏽🤝🩷🫱🏻🩷🫱🏽🪳🕰🤝🫸🫱🏻🫱🏽🫱🏽🫱🏽🫱🏽🚀🪈🫲🪘🫱🏽🚀🫲🤝');
});
server.listen(3000, () => {
    // code inside
    // no code inside needed. We are listening for connections
});
