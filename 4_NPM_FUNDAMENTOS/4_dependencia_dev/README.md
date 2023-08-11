# Instalando pacote

```txt
Há uma possibilidade de instalar pacotes apenas para o ambiente de desenvolvimento;
Utilizamos a flag --save-dev;
Isso faz com que ele seja separado no package.json dos demais;
E então na build de produção não instalaremos estes módulos;
Um exemplo: servidor para ambiente local, como o Nodemon;

```

- npm init -y
- npm install lodash
- npm install --save-dev chalk@4.1.2
