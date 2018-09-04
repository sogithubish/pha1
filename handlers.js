/*
* Pirple Homework Assignment #1
* @author Dmitry Shulgin
* @email dshulgin@mail.ru
*
*
* Definition of Request Router and Handlers
*
*/


var response = {};

hello = function(){
  response.statusCode = 406;
  response.contentType = 'application/json';
  response.data = {'hello':'Pirple welcomes you!'};
};

// route not found
notFound = function(){
  response.statusCode = 404;
  response.contentType = 'plain/text';
  response.data = {'not-found':'This route is not found.'};
};

const routes = {
  'hello': hello
};

var handlers = {};
handlers.routeRequest = function(routeString){
  var choosenHandler = typeof(routes[routeString]) !== 'undefined' ? routes[routeString] : notFound;
  choosenHandler();
  return response;
};

module.exports = handlers;
