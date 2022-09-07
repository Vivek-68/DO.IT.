const taskInput = document.querySelector(".input-task");
const addBtn = document.querySelector(".btn");
const taskList = document.querySelector(".list");

document.addEventListener('DOMContentLoaded',getTodos);
addBtn.addEventListener('click',addTask);
taskList.addEventListener('click',del);

function addTask(event)
{
    event.preventDefault();
    const taskDiv = document.createElement('div');
    taskDiv.classList.add("todo");
    const newTask = document.createElement('li');
    newTask.innerText = taskInput.value;
    newTask.classList.add('todo-item');
    taskDiv.append(newTask);

    saveLocally(taskInput.value);

    const checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    checkBtn.classList.add("check-btn");
    taskDiv.append(checkBtn);

    const delBtn = document.createElement('button');
    delBtn.innerHTML = '<i class="fas fa-trash"></i>';
    delBtn.classList.add("del-btn");
    taskDiv.append(delBtn);

    taskList.append(taskDiv);
    taskInput.value="";

}
function del(e)
{
    const item = e.target;
    if(item.classList[0] === "del-btn")
    {
        const todo = item.parentElement;
        removeTasks(todo);
        todo.remove();
    }
    if(item.classList[0] ==="check-btn"){
        const todo = item.parentElement;
        removeTasks(todo);
        todo.classList.toggle("completed");
    }
}

function saveLocally(todo)
{
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(todo);
    localStorage.setItem("tasks",JSON.stringify(tasks));

}

function getTodos()
{
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));

    }
    tasks.forEach(function(todo){
    const taskDiv = document.createElement('div');
    taskDiv.classList.add("todo");
    const newTask = document.createElement('li');
    newTask.innerText = todo;
    newTask.classList.add('todo-item');
    taskDiv.append(newTask);


    const checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    checkBtn.classList.add("check-btn");
    taskDiv.append(checkBtn);

    const delBtn = document.createElement('button');
    delBtn.innerHTML = '<i class="fas fa-trash"></i>';
    delBtn.classList.add("del-btn");
    taskDiv.append(delBtn);
    taskList.append(taskDiv);

    });
}

function removeTasks(todo)
{
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));

    }
    const taskIndex = todo.children[0].innerText;
    tasks.splice(tasks.indexOf(taskIndex),1);
    localStorage.setItem("tasks",JSON.stringify(tasks));

   
}