const express = require('express')
const app = express()
const ejs = require('ejs')
const methodOverride = require('method-override');
const mongoose = require('mongoose')
const Article = require('./models/articles')
const bodyParser = require('body-parser')
const {get,post,dlt} = require('./controllers/functions')

app.set('view engine','ejs')

app.use(bodyParser.urlencoded({
  extended : true
}));

app.use(express.static("public"))

mongoose.connect('mongodb://localhost:27017/wikiDB',{
  useNewUrlParser : true ,
  useUnifiedTopology : true
});

app.get('/',(req,res)=>{
  res.render('index2')
})

app.route('/articles').get(get).post(post).delete(dlt)

app.get('/articles/:id',async(req,res)=>{
  try{
    const id = req.params.id
    const temp = await Article.findOne({title : id})
    console.log(temp);
    res.send(temp)
  //  res.render('index',{articles : temp})
  }catch(err){
    res.send(err)
  }
})

const port = process.env.PORT || 3000 ;
app.listen(port,()=>{
   console.log(`server is sucessfully running on port ${port}`)
})
