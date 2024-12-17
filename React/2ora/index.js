//wraapper function
 
 
/*
console.log("ok");
console.log(_dirname);      //file name
console.log(_filename);     //elérési utvonal
//abszolut könyvtár     https://hu.wikipedia.org/wiki/El%C3%A9r%C3%A9si_%C3%BAt
console.log(module);        
console.log(require);       //
console.log(exports);       //
*/
 
console.log("Hello World!");
 
 
const add = require('./calculator.js');
console.log(add(2, 3));
 
 
//https://www.w3schools.com/nodejs/nodejs_http.asp
require('http');
 
const server =http.createServer(function(req, res){
    res.writeHead(200); //start
    res.end('Hello World!'); //finish
});
 
server.listen(8080); //port