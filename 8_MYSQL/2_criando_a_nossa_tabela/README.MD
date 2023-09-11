# Criando a nossa tabela

- Para manipular os dados do sistema vamos precisar criar uma tabela;
- Faremos isso via Workbench, criando uma tabela chamada books;
- Onde vamos cadastrar livros;
- Estes livros vão precisar de duas informações: título e número de
páginas;

```MySQL
create database nodemysql;

CREATE TABLE `nodemysql`.`books` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NULL,
  `pageqty` INT NULL,
  PRIMARY KEY (`id`));

SELECT * FROM `nodemysql`.`books`;

```