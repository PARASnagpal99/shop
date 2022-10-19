const Article = require('../models/articles')

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


module.exports = {get,post,dlt}
