const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

tasks.forEach(task => addTaskToDOM(task));

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (!taskText){
        alert("Please enter a task");
        return;
    }
    const task = { text: taskText, completed: false };
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    addTaskToDOM(task);
    taskInput.value = "";
});

function addTaskToDOM(task){
    const li = document.createElement('li');
    li.textContent = task.text;
    if (task.completed){
        li.classList.add('completed');
    }

    li.addEventListener('click', () => {
        task.completed = !task.completed;
        li.classList.toggle('completed');
        localStorage.setItem('tasks', JSON.stringify(tasks));
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        tasks = tasks.filter(t => t !== task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}
