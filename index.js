import express from "express";

const PORT = 3000;
const app = express();

let TodoL = [];

app.use(express.json());

app.use(express.static("public"));

app.set("view engine", "ejs");


// Get all tasks
app.get('/TodoL', (req, res) => {
  res.json(TodoL);
});

// Add a new task
app.post('/Todol', (req, res) => {
  const { task } = req.body;
  if (task) {
    const newTask = {
      text: task,
      completed: false,
      important: false,
    };
    TodoL.push(newTask);
    res.status(201).json(newTask);
  } else {
    res.status(400).json({ error: 'Task is required' });
  }
});

// Delete task by index
app.delete('/TodoL/:index', (req, res) => {
  const index = parseInt(req.params.index, 10);  // Corrected typo here
  if (index >= 0 && index < TodoL.length) {
    const removed = TodoL.splice(index, 1);
    res.json({ message: 'Task deleted', removed, TodoL });
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// Mark task as complete/incomplete
app.patch('/TodoL/:index/complete', (req, res) => {
  const index = parseInt(req.params.index, 10);  // Corrected typo here
  if (index >= 0 && index < TodoL.length) {
    TodoL[index].completed = true;
    res.json({ message: 'Task Updated', task: TodoL[index] });
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});
app.patch('/TodoL/:index/incomplete', (req, res) => {
  const index = parseInt(req.params.index, 10);  // Corrected typo here
  if (index >= 0 && index < TodoL.length) {
    TodoL[index].completed = false;
    res.json({ message: 'Task Updated', task: TodoL[index] });
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// Mark task as important
app.patch('/TodoL/:index/important', (req, res) => {
  const index = parseInt(req.params.index, 10);
  if (index >= 0 && index < TodoL.length) {
    TodoL[index].important = !TodoL[index].important;
    res.json({ message: 'Task Updated', task: TodoL[index] });
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
