const express = require('express')
const app =express()
const hbs=require('hbs')

app.set('view engine','hbs')
hbs.registerPartials(__dirname+'/views/partials')
hbs.registerHelper('date',()=> {
  return new Date().getFullYear()
})
hbs.registerHelper('message',(text)=> {
  return text.toUpperCase();

})
app.use(express.static(__dirname+'/template'))
app.use(express.static(__dirname+'/static'))
app.use((req,res,next) => {
  res.render('template/maintain.hbs')
})

app.get('/bad', (req,res) => {
  res.send({
    message:'We cant find the site your are looking for'
  })
})
app.get('/',(req,res) => {
  res.render('index.hbs',{message:'Welcome to the Node app'})
})
app.get('/help',(req,res) => {
  res.render('help.hbs')})


app.listen(3000,(report)=> {
  console.log(report);
})
