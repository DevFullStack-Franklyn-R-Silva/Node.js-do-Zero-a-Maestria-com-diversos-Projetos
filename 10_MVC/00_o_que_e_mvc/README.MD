# O que é MVC?

```txt
- Um acrônimo de Model View Controller;
- É um padrão de arquitetura de software, que pode deixar nossas aplicações mais organizadas;
- A aplicação é dividida em camadas, cada sua responsabilidade;
- Teremos uma nova estrutura de arquivos e pastas;
- E a aplicação obedece um novo fluxo, que se repete para todas as ações;
- Aplicações em MVC tendem a ter uma manutenção/evolução mais fácil;
```

## O papel do MODEL no MVC (Model)

```txt
- É uma camada onde vamos interagir com o banco de dados;
- Normalmente interage com os arquivos do Controller;
- Responsável por resgatar, atualizar, remover e criar dados;
- É comum que cada tabela seja um Model, assim como fazemos com o setup do Sequelize;
- Os Models são quem controlam a arquitetura do sistema, é fácil entender a regra de negócios analisando eles;
```

## Camada de visualização (View)

```txt
- É onde apresentamos os dados que estão no banco;
- Geralmente a view interage com o Controller, que é o meio de campo;
- E também nas views temos a interação com o usuário, como formulários para inserir dados no sistema;
- É correto não haver lógica/regra de negócios na view, ou o mínimo possível;
- Normalmente a exibição é feita através do HTML;
```

## Camada de controle (Controller)

```txt
- É onde temos a interação entre Model e View;
- Podemos definir qual view será impressa, processar dados que foram enviados para o banco ou para a view;
- Os Controllers terão um código parecido com os das rotas, que estamos criando até então no curso;
```
