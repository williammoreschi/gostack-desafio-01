<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="100px" />
</h1>

### Iniciando os estudos de back-end com Node.js do bootcamp GoStack da Rocketseat! 

No primeiro módulo tivemos uma introdução sobre o que é uma API REST, foi mostrado os métodos mais utilizados do HTTP (get, post, put, delete) foi visto na prática como desenvolver um CRUD (create, read, update, delete) e de como interagir com ele. O Diego explicou como usar middlewares globais e locais, ele também mostrou como debugar o código com o auxílio das ferramentas do VS Code em vez de usar o console.log rsrsrs...

Com o que foi mostrado no primeiro módulo e com o conhecimento que tenho finalizei o 1 desafio.

## :rocket: Sobre o desafio

Crie uma aplicação para armazenar projetos e suas tarefas do zero utilizando [Express](https://expressjs.com/pt-br/).


### Rotas

- `POST /projects`: A rota deve receber `id` e `title` dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: `{ id: "1", title: 'Novo projeto', tasks: [] }`; Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com aspas duplas.

- `GET /projects`: Rota que lista todos projetos e suas tarefas;

- `PUT /projects/:id`: A rota deve alterar apenas o título do projeto com o `id` presente nos parâmetros da rota;

- `DELETE /projects/:id`: A rota deve deletar o projeto com o `id` presente nos parâmetros da rota;

- `POST /projects/:id/tasks`: A rota deve receber um campo `title` e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do `id` presente nos parâmetros da rota;

### Exemplo

Se eu chamar a rota `POST /projects` repassando `{ id: 1, title: 'Novo projeto' }` e a rota `POST /projects/1/tasks` com `{ title: 'Nova tarefa' }`, meu array de projetos deve ficar assim:

```js
[
  {
    id: "1",
    title: "Novo projeto",
    tasks: ["Nova tarefa"]
  }
];
```

### Middlewares

- Crie um middleware que será utilizado em todas rotas que recebem o ID do projeto nos parâmetros da URL que verifica se o projeto com aquele ID existe. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;

- Crie um middleware global chamado em todas requisições que imprime (`console.log`) uma contagem de quantas requisições foram feitas na aplicação até então;

### Rodar Local

```sh
# instalar as dependências necessarias para que o app funcione
yarn install

# Iniciar o servidor na porta 3333
yarn dev

# Parar o servidor
crtl+c
```
Para ter acesso as todas as rotas import o insomnia.json em uplicativo que permita isso, <a href="https://insomnia.rest/download/" target="_blank">Insominia</a>
ou <a href="https://www.getpostman.com/" target="_blank">Postman</a>

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Rocketseat :wave: [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)
