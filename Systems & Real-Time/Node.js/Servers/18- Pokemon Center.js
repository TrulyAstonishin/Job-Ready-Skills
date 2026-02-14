const http = require('http');
const server = http.createServer((request, response) => {
    let statusCode = 200;
    let contentType = 'text/html; charset=utf-8';
    let content = '';
    if (request.url === '/')
    {
        content = '<h1>Welcome to the Pokemon center!</h1>' +
            '<img src="https://i.imgur.com/JrVb4Eg.png">'
    } else if (request.url === '/pikachu')
    {
        console.log('Pika Pika!');
        content = '<img src="https://static0.srcdn.com/wordpress/wp-content/uploads/2023/10/pokemon-pikachu-injured.jpg?w=1200&h=675&fit=crop">'
    } else if (request.url === '/sylveon')
    {
        console.log('Sylv Sylv!');
        content = '<img src="https://images.cults3d.com/OudDlXxrdaxwJv7uROBQg6haBTU=/516x516/filters:no_upscale()/https://fbi.cults3d.com/uploaders/39919480/illustration-file/dfa34654-fb46-4d53-a457-fc81513f533a/Sylveon-descansando-en-su-cama.png">'
    } else
    {
        statusCode = 404;
        content = '<h1> 404 Not Found</h1><p>This Pokemon is currently resting!</p>';
    }
    response.writeHead(statusCode, {'Content-Type': contentType});
    response.end(content)
});

server.listen(3000);



