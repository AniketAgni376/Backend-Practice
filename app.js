const http = require('http');
// Single Route
// var server = http.createServer(function(req,res){
//     console.log(req);
//     res.end(" chalaaa raha hai");
// })

// server.listen(3000);

// Multiple Server

const server = http.createServer(function(req, res) {
    if(req.url === '/'){
    res.end("It's working");
}
else if(req.url === "/appstore") {
res.end(" Nhi chal rha hai");
}

 else {
    res.end(" Server Down");
    }
})

server.listen(3000);