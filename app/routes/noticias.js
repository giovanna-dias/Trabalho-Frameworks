module.exports=function(app){
    app.get('/noticias', function(req,res){ //Rota para página de notícias
        const dbConnection=require('../../config/dbConnection');
        const connection=dbConnection(); //Aqui é a conexão com dbConnection
        connection.query('select * from noticias', function(error, result){
            if(error){
                console.log(error);
            };
            res.render('noticias/noticias.ejs', {noticias:result}); //Renderiza a pagína de notícias.
        });


    });
};