// nome  // comando:   node index.js nome=Franklyn idade=25

console.log(process.argv)

const args = process.argv.slice(2)

console.log(args);

const nome = args[0].split("=")[1]

console.log(nome)

const idade = args[1].split("=")[1]

console.log(idade)

console.log(`O nome deler é ${nome} e a idade é ${idade}`)