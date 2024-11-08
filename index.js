
import express from "express";

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
//counter code

const completedCounter = document.getElementById("completed-counter");
const incompleteCounter = document.getElementById("uncompleted-counter");

function updateCounters() {
   const completedTasks = document.querySelectorAll(".completed").length;
   const incompleteTasks =document.querySelectorAll("li:not(.completed)").length;
 
   completedCounter.textContent = completedTasks;
   incompleteCounter.textContent = incompleteTasks;
 }
 updateCounters();
 checkbox.addEventListener("click", function () {
   li.classList.toggle("completed", checkbox.checked);
   //add the function below
   updateCounters();
 });
 editBtn.addEventListener("click", function () {
   const update = prompt("Edit task:", taskSpan.textContent);
   if (update !== null) {
     taskSpan.textContent = update;
     li.classList.remove("completed");
     //add the code below
     checkbox.checked = false;
     updateCounters();
   }
 });