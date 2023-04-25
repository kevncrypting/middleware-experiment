const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const HOST = '127.0.0.1';
const PORT = '3000';

const morgan = require('morgan'); // provides log information about the request
const logger = morgan('tiny'); // tiny configuration prints the request method, request path, response status code, response length (in bytes), and how long it took to process the request and send the response
app.use(logger); // this middleware should be registered before any of the route handler functions

const helmet = require('helmet'); // sets HTTP Response headers appropriately, protecting app from well-known vulnerabilities (form of security middleware)
app.use(helmet());

app.use(express.static('public')); // tells express to look for the site's static (unchanging) files in the 'public' folder

app.get('/', (request, response) => {
    response.send('Hi');
});

server.listen(PORT, HOST, () => {
    console.log(`Listening on http://${HOST}:${PORT}`)
});