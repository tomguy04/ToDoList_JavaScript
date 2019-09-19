const express = require ('express');
const bodyParser = require ('body-parser');
const date = require(__dirname + '/date.js');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static('public'));

const tasks = [];
const workTasks = [];

app.get('/',(req,res)=>{
    let day = date.getDate();
    res.render('index',{title:day, tasks:tasks})
})

app.post('/',(req,res)=>{
    if(req.body.button==='Work Tasks'){
        workTasks.push(req.body.task);
        res.redirect('/work');
    }else{
        var task = req.body.task;
        tasks.push(task);
        res.redirect('/');
    }
})

app.get('/work',(req,res)=>{
    res.render('index',{title:'Work Tasks',tasks:workTasks})
})

app.listen(3000,()=>{
    console.log('listening on port 3000');
})