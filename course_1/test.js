var http = require("http");

http.createServer(function (req, res){ //create Server
    res.end("welcome to my Nelson server"); //end Response
}).listen(3000); //set Port 3000