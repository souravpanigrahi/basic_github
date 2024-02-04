const http = require("http");

const PORT = 3000;

//Created a http server using createserver function using basic http module
const server = http.createServer(function listener() {
  //callback enabled with a listener fn
  console.log("Request Recieved");
});

//Starts the server that we just created above
server.listen(PORT, function exec() {
  console.log(`Server is up and running on:${PORT}`);
});

//Hi i have made some changes over here


console.log("Hi this is the change introduced in main");

console.log("Ready for tag")

