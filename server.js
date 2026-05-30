const express=require('express');
const app=express();
const PORT=3000;
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.render('index');
});
app.post('/submit',(req,res)=>{
    const user= req.body.username;
    res.render('index',{name: user});
});
app.listen(PORT,()=>{
    console.log(`server runs here:http://localhost:${PORT}`)
})