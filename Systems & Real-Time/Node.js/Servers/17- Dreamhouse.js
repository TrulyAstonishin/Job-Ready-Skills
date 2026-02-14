const http = require('http');
const server =  http.createServer((request, response) => {
    let statusCode = 200;
    let contentType = 'text/html; charset=utf-8';
    let content = '';
    if (request.url === '/')
    {
        content = '<h1> This is the exterior of my house!' +
            '<img src="https://www.skiinluxury.com/blog/wp-content/uploads/2020/10/5f748f9d-f948-4e84-876d-16130a000f09.jpg">'
    } else if (request.url === '/living-room')
    {
        content = '<h1> This is the living room of my house!' +
            '<img src="https://i.ytimg.com/vi/GmztQBfWWbA/maxresdefault.jpg">'
    } else if (request.url === '/kitchen')
    {
        content = '<h1> This is the kitchen of my house!' +
            '<img src="https://www.woohome.com/wp-content/uploads/2025/09/1-6.jpg">'
    } else if (request.url === '/bedroom')
    {
        content = '<h1> This is the bedroom of my house!' +
            '<img src="https://lh6.googleusercontent.com/HT_wQNXA9eigbQIIuT3RaWn7sUrA19NaZZh3oJWGJvrCo0LDhnnqXMJy_mK4Xhx8Po1iW1D622fAv82DTl5e47kRXQNcMGzU_cTLg88DaCsRZ2xUkkkpmtrfJx7oZA_OapjyDHgXNXMnMSb_o9JlLs8">'
    } else if(request.url === '/bathroom')
    {
        content = '<h1> This is the bathroom of my house!' +
            '<img src="https://i.pinimg.com/736x/a8/e6/e3/a8e6e39ab6d62207e8a6cd4860fc8b72.jpg">'
    } else {
        statusCode = 404;
        content = '<h1> 404 Not Found</h1><p>Page does not exist!</p>';
    }

    response.writeHead(statusCode, {'Content-Type': contentType});
    response.end(content)
})
server.listen(3000, function () {
    console.log('Server running at http://localhost:3000');
});