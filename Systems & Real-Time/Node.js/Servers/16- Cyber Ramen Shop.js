const http = require('http');

const server = http.createServer((request, response) => {

    // Your code goes here! 😋
    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    response.write('Welcome to Neon Noodles!\n');
    response.write('===============\n');
    response.write('Late Night Menu\n');
    response.write('===============\n');
    response.write('\n');
    response.write('Ramen:\n');
    response.write('1. Shawarma Ramen \n');
    response.write('\n');
    response.write('Extra Toppings:\n');
    response.write('1. Ceramic Onion\n');
    response.write('2. Celestial Beans\n');
    response.end('Thank you for visiting us!');
});

server.listen(3000, () => {
    console.log('message');
});