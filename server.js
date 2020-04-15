const http = require('http'); // Importando pacote nativo HTTP

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
 if(req.url =="/"){
     res.end(JSON.stringify({titulo:'Pagina Inicial'}))
 }else if(req.url == "/palmeiras"){
     res.end(JSON.stringify({titulo:'Palmeiras'}))
 }else{
     res.end("Error")
     res.statusCode=400;
 }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});