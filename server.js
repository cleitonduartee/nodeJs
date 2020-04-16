const http = require('http'); // Importando pacote nativo HTTP
const path = require('path');
const fs = require('fs');


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
 
 if(req.url =="/"){
    
    const home= path.join(__dirname,'public','home.html'); //Caminho onde está o arquivo

    fs.readFile(home, 'utf8',(err,data)=>{ //faz a leitura do arquivo no formato utf8
        if(err) throw err;
       //console.log(data);
       res.end(data);
    } )

 }else{
     const file = path.join(__dirname,'public', req.url);

     fs.readFile(file, 'utf8',(err,data)=>{
         if(err) throw err;
         res.end(data)
     })
     }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});