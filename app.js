const app = require('./config/server.js'); //Importação do módulo
const rotaHome=require('./app/routes/home')(app); // Direcionei a rota home
const rotaAdmin=require('./app/routes/admin')(app); // Direcionei a rota admin
const rotaNoticias=require('./app/routes/noticias')(app); // Direcionei a rota noticias

app.listen('3000',function(){
console.log('Servidor rodando na porta 3000'); // Aqui criei um servidor rodando na porta 3000
});
