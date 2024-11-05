const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const PORT = 3000;
const app = express();

let TodoL= [];
 app.use(express.json());
 app.use(express.static("public"));

 app.set("view engine", "ejs");
 app.get('/TodoL', (req, res)=>{
    res.json(TodoL);
 });

 app.post('/Todol', (req, res)=>{
    const {task}= req.body;
    if(task){
        const newTask ={
            text:task,
            completed: false,
            important: false,
        };
    TodoL.push(newTask);
    res.status(201).json(newTask);
 }else {
    res.status(400).json({error: 'Task is required'});
 }

 });
 
 //Delete
 app.delete('/TodoL/:index', (req,res)=>{
    const index= parseInt(req.paramas.index, 10);
    if(index >= 0 && index < TodoL.length){
        const removed = TodoL.splice(index,1);
        res.json({ message: 'Task deleted', removed, TodoL})
    }else{
        res.status(404).json({message: 'Task not found'});
    }
});
app.listen(PORT, ()=>{
    console.log('Server is running on http://localhos:${PORT}');
});

//Complete task
app.patch('/TodoL/:index/complete', (req, res)=>{
 const index = parseInt(REQ.paramas.index, 10);
 if(index >= 0 && index< TodoL.length){
    TodoL[index].completed= !TodoL[index].completed;
    res.json({message: 'Task Updated', task: TodoL[index]});
 }else{
    res.status(404).json({message: 'Task not found'});
 }

});

//Important task
app.patch('/TodoL/:index/important', (req,res)=>{
    const index = parseInt(req.params.index, 10);
    if(index >= 0 && index< TodoL.length){
        TodoL[index].important= !TodoL[index].important;
        res.json({message: 'Task Updated', task: TodoL[index]});
     }else{
        res.status(404).json({message: 'Task not found'});
     }


});


