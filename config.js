/*
* Pirple Homework Assignment #1
* @author Dmitry Shulgin
* @email dshulgin@mail.ru
*
*
* Server configuration management
*
* Conditions:
* 1. Use environment vars CFG_PORT, CFG_MSG, if set, otherwise
* 2. Check if there is CFG_PWD direction to pirple-server-configurtion file, or
* use process.cwd()
* 3. Read <path>/pirple-server-configuration file if exists, otherwise
* 4. Use default Port 3000 and Welcome Msg "Pirple welcomes you!"
*/

var configuration = {};

configuration.port = typeof(process.env.CFG_PORT) == 'string' ? Number.parseInt(process.env.CFG_PORT) :  3000;

module.exports = configuration;
