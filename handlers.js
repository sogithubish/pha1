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

//If you want another one route just append it to the routes object below.
//Do not forget to add hndler's code otherwise you get 404 response.

//handler for /hello
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

/*
* Place your handler function here
*/

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
