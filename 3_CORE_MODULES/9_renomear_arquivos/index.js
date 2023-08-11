const fs = require("fs");

const arqAntigo = "arquivo.txt";
const arqNovo = "novoarquivo.txt";

fs.rename(arqAntigo, arqNovo, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(
        `O arquivo ${arqAntigo} foi renomeado com sucesso para ${arqNovo}`
    );
});
