// npm init
// npm install minimist
// comando: node index.js --nome=Franklyn --profissao=Programador

const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

console.log(args);

const nome = args['nome'];
const profissao = args['profissao'];

console.log(nome, profissao);

console.log(`O nome dele é ${nome} e a profissão é ${profissao}`)