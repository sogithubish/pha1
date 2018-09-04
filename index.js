/*
* Pirple Homework Assignment #1
* @author Dmitry Shulgin
* @email dshulgin@mail.ru
*
* The Assigmnent
* Please crate a simple "Hello, World!" API. MEaning:
* 1. It should be a RESTful JSON API that listens on a port of your choice.
* 2. When someone posts anything to the route /hello, you should
* return a welcome message in JSON format. This message can be anything you want.
*
* Also
* Set up listening port in command line or use default value.
* Use CFG_PORT to set up port in command line, for example
* CFG_PORT=5000 node index.js
*
*/

const http = require('http');
const url  = require('url');

//configuration
const config = require('./config');
//Here we are all the handlers
const handlers = require('./handlers');


const server = http.createServer((req, res) => {

  //parse url
  var parseUrl = url.parse(req.url, true);

  //extract route, clean dashes
  var path = parseUrl.pathname;
  var trimmedPath = path.replace(/^\/+|\/+$/g,'');

  //Asks for proper handler, then runs it.
  //The handler is responsible for building correct header and payload for response.
  var routeResponse = handlers.routeRequest(trimmedPath);

  //The routeResponse is always up. The routeRequest is responsible for managing
  //404, 500, etc and internal errors handling (not implemented yet)

  //set content type as JSON
  res.setHeader('Content-Type', routeResponse.contentType);
  //set status code returning
  res.writeHead(routeResponse.statusCode);
  //build JSON-like data
  var rrs = JSON.stringify(routeResponse.data);
  //..then send response back
  res.end(rrs);
});

server.listen(config.port, function(){
  console.log("Pirple Homework Assesement #1 started on port "+config.port);
});
