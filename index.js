const fs=require('fs');
const expressHandlebars=require('express-handlebars')
const express=require('express')
const app=express()
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
  }))
  app.use(express.static(__dirname+'/public'))
  const bodyparser=require('body-parser')
  app.use(bodyparser.urlencoded({extended:false}))
app.get('/contact',(req,res)=>{
res.render('contact')
})
app.post('/contact',(req,res)=>{
    res.render('contact',{name:"Thank You "+`<h1 style="color:green">${req.body.name}    .</h1> For submitting The Form`})
})
app.set('view engine', 'handlebars')
app.get('/',(req,res)=>{
    res.render('home',{title:'Home',link:"/about"})
})
app.get('/about',(req,res)=>{
    res.render('about',{title:'About',link:"/"})
})
app.use((req,res)=>{
    res.render('404',{title:'Not Found'})
})
app.use((err,req,res,next)=>{
    res.render('500',{title:'Sorry Some server Error'})
    next();
})

const PORT=process.env.PORT || 3000;
app.listen(PORT)