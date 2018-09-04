/*
* Pirple Homework Assignment #1
* @author Dmitry Shulgin
* @email dshulgin@mail.ru
*
*
* Server configuration management
*
* Use environment var CFG_PORT or default value of 3000 to set up the port listening.
*
*/

var configuration = {};

configuration.port = typeof(process.env.CFG_PORT) == 'string' ? Number.parseInt(process.env.CFG_PORT) :  3000;

module.exports = configuration;
