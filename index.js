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
* The Implementation Requirements
* 1. Set up listening port and welcomw message through configuration file
*  pirple-server-config on disk.
* 2. Set up default values if no configuration file found. Default value for port is 3000,
*  welcome message is "Hello, Pirple!".
* 3. Log to console the payload was recieved.
*
*/

const http = require('http');
const url  = require('url');

//configuration
const config = require('./config');
//custom utilities
const handlers = require('./handlers');


const server = http.createServer((req, res) => {

  var parseUrl = url.parse(req.url, true);

  var path = parseUrl.pathname;
  var trimmedPath = path.replace(/^\/+|\/+$/g,'');

  var routeResponse = handlers.routeRequest(trimmedPath);
  res.setHeader('Content-Type', routeResponse.contentType);
  res.writeHead(routeResponse.statusCode);
  var rrs = JSON.stringify(routeResponse.data);
  res.end(rrs);
});

server.listen(config.port, function(){
  console.log("Pirple Homework Assesement #1 started on port "+config.port);
});
