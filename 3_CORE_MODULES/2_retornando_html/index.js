const http = require('http');

const port = 3001;

const server = http.createServer((req, res) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/html');
   res.end('<h1>Olá, este é meu primeiro server com HTML.</h1>');
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
