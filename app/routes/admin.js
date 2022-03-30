module.exports=function(app){
    //Rota para a página de inclusão de noticias
    app.get('/formularioinclusaonoticia', (req,res)=>{
        res.render('admin/form_add_noticia.ejs');
    });
};