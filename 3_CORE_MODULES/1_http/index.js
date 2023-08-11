// Importa o módulo http do Node.js
const http = require('http');

// Define a porta em que o servidor irá escutar
const port = 3001;

// Cria o servidor usando a função createServer do módulo http
const server = http.createServer((req, res) => {
    // Escreve a resposta que será enviada ao cliente
    res.write('hello world');
    
    // Finaliza a resposta
    res.end();
});

// Inicia o servidor, fazendo-o escutar na porta especificada
server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
