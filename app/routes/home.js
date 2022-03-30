module.exports=function(app){
     //Rota para a página de inicial
    app.get('/',function(req,res){
        res.render('home/index.ejs');
    });
    
};