// console.log("node js");
// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
// 	res.statusCode = 200;
// 	res.setHeader("Content-Type", "text/plain");
// 	res.end("Hello World");
// });

// server.listen(port, hostname, () => {
// 	console.log(`Server running at http://${hostname}:${port}/`);
// });

const userName = 'ruslan'

const sayHi = (userName) => `Hi ${userName}`


// in order to import couple of fun or string whatever creating object
module.exports = {
	userName,
	sayHi,
}