# To-Do List
# Overview
This is a simple To-Do List web application built using Node.js, Express, JavaScript, CSS, and HTML. The app allows users to:
![to-do home](https://github.com/user-attachments/assets/8d6a1038-9d18-48d8-960e-db958b96f9ca)

- Add tasks to the list
- Mark tasks as completed by clicking a tick button
- Delete tasks
- Edit tasks
- View the number of completed and uncompleted tasks with a live counter
- All the functionality is powered by a backend server running on Node.js using Express.

# Features

- Add tasks: Users can add tasks to the to-do list.
- Mark tasks as completed: Each task has a "tick" button to mark it as completed.
- Delete tasks: Users can delete tasks from the list.
- Edit tasks: Users can edit the text of tasks.

- Counter: The app dynamically updates the number of completed and uncompleted tasks.
- Backend: All data is managed and stored in memory on the backend (Node.js server).
![counter screen](https://github.com/user-attachments/assets/7c00086e-2003-490c-8a06-a37f59441ada)

# Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Data Storage: In-memory (Tasks are stored in a simple array)

# Usage
 Frontend (Client Side)
The frontend is built with HTML, CSS, and JavaScript. The page displays the list of tasks along with buttons for interacting with each task. The counter at the top of the page shows the number of completed and uncompleted tasks.

- Add Task: Enter a task in the input field and click the "Add Task" button to add a new task.
- Complete Task: Click the checkmark (tick) button next to a task to mark it as completed. The task will visually change to show it's completed.
- Delete Task: Click the trash can icon next to a task to remove it from the list.
- Edit Task: You can edit a task directly in the list by changing the task text. (You can implement this by adding an edit button or making the task text editable directly.)
- The application interacts with the backend using API calls to handle tasks.

 Backend (Server Side)
The backend is implemented in Node.js using Express.

- GET /TodoL: Retrieves all tasks.
- POST /Todol: Adds a new task.
- DELETE /TodoL/:index: Deletes a task by its index.
- PATCH /TodoL/:index/complete: Marks a task as completed or incomplete.
- PATCH /TodoL/:index/important: Marks a task as important

# Example Endpoints
- GET /TodoL: Retrieve the list of tasks.
- POST /Todol: Add a new task to the list. Example body
- DELETE /TodoL/:index: Delete a task by index.
- PATCH /TodoL/:index/complete: Toggle the completion status of a task.
- PATCH /TodoL/:index/important: Toggle the importance of a task

# Troubleshooting
If you run into issues:

- Make sure you have Node.js installed.
- Check if the server is running on the correct port (3000).
- Check the browser console and server logs for errors.

# Prerequisites
- Make sure you have Node.js installed on your machine. If you don't have it installed, download and install it from nodejs.org.

   # Video
  -Below is the video showcasing how the To-do list works, from being able to ad new tasks as many as you can and having a scrollbar feature,
  mark as completed button which as the task to the counter, unmark the completed and detele. The counter is reactive to the actions that happens on added tasks.

https://github.com/user-attachments/assets/88706524-de2b-4c16-90d1-4f0e4642fffa

-The video was added on the readme file because I could not deploy the To-do list.



