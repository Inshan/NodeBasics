const http = require('http');
// createServer takes function as a parameter

const dataControl = (req, resp)=>{
    resp.write("<h1>Hi! I am Inshan</h1>");
    resp.end();
}
http.createServer(dataControl).listen(4500);

