const express = require('express');

const server = express();

/*Variável responsável por armazenar os dados da aplicação*/
const projects = [];

/*Para que express possa entender o formato json*/
server.use(express.json());

/*Middleware verifica se o projeto existe*/
function checkProjectExists(req,res,next){
  const { id } = req.params;
  const project = projects.find(p => p.id == id);
  
  if(!project){
    return res.status(400).json({error:"Projeto não encontrado"});
  }

  return next();
}

/*Middleware Conta o numero de requisições feitas*/
function logRequest(req, res, next) {

  console.count("Nº de Requisições");

  return next();
}

server.use(logRequest);

/*Retorna uma lista com todos os projetos*/
server.get('/projects',(req,res)=>{
  return res.json(projects);
});

/*Cadastra um novo projeto*/
server.post('/projects',(req,res)=>{
  const { id, title } = req.body;
  const project = {
    id,
    title,
    task:[]
  }
 
  projects.push(project);

  return res.json(project);
});

/*Altera o título do projeto com base no id que vem nos parâmetros da rota*/
server.put('/projects/:id',checkProjectExists,(req,res)=>{
  const { id } = req.params;
  const { title } = req.body;
  const project = projects.find(p => p.id == id); 
 
  project.title = title;
 
  return res.json(project);
});

/*Deleta o projeto com base no id que vem nos parâmetros da rota*/
server.delete('/projects/:id',checkProjectExists,(req,res)=>{
  const { id } = req.params;
  const project = projects.findIndex(p => p.id == id); 

  projects.splice(project,1);
 
  return res.send();
});

/*Cadastra a nova tarefa no projeto escolhido através do parâmetro id*/
server.post("/projects/:id/tasks",checkProjectExists,(req,res)=>{
  const { id } = req.params;
  const { title } = req.body;
  const project = projects.find(p => p.id == id);
  project.task.push(title);
  return res.json(project);
});

/* Inicia o servidor na porta -> 3333 */
server.listen("3333");