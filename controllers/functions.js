const Article = require('../models/articles')


// get all articles
const get = async(req,res)=>{
  try{
     const temp = await Article.find({})
     res.render('index',{articles : temp})
  }catch(err){
    res.send(err) ;
  }
}


const post = async(req,res)=>{
  const data = req.body
  const newArticle = new Article({
    title : data.title ,
    content : data.content
  })
  try{
    await newArticle.save()
    res.redirect('/articles')
  }catch(err){
    res.send(err)
  }
}


const dlt = async(req,res)=>{
  try{
    const temp = await Article.deleteMany({})
    res.redirect('/articles')
  }catch(err){
     console.log(temp)
     res.send(err)
  }
}

// get a specific article
const get2 = async(req,res)=>{
  try{
    const id = req.params.id
    const temp = await Article.findOne({title : id})
    console.log(temp);
    res.send(temp)
  //  res.render('index',{articles : temp})
  }catch(err){
    res.send(err)
  }
}


const post2 = async(req,res)=>{
  try{
    const id = req.params.id ;
    const temp = await Article.updateMany({title : id} , {title : req.body.title , content : req.body.content})
    res.redirect('/articles')
  }catch(err){
    res.send(err)
  }
}


const dlt2 = async(req,res)=>{
  try{
    const id = req.params.id ;
    await Article.deleteOne({title : id})
  //  res.redirect('/articles')
    res.send('deleted')
  }catch(err){
    res.send(err)
  }
}


module.exports = {get,post,dlt,get2,post2,dlt2};
