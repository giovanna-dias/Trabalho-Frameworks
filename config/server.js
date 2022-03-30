const express = require ('express'); //Aqui é a importação do express

const app = express(); //O app recebe o express em execução.

app.set('view-engine', 'ejs'); //Aqui são as configurações do ejs como motor de telas do projeto

app.set('views', './app/views'); // configuração do novo diretório na pasta views

module.exports=app;