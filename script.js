const todoList = []

function addTask() {
    const input = document.getElementById('todo-input')
    const taskText = input.value.trim()
    if(taskText !== '') {
        const newTask = {
            id: Date.now(),
            text: taskText,
            done: false
        }
        todoList.push(newTask)
        renderTask()
        input.value = ""
   }
} 

function toggleTask(id) {
    const task = todoList.find(task => task.id === id)
    if(task) {
        task.done = !task.done
        renderTask()
    }    
}

function deleteTask(id) {
    const taskIndex = todoList.findIndex(task => task.id === id)
        if (taskIndex > -1) {
            todoList.splice(taskIndex, 1)
     } 
}

function renderTasks() {
    const list = document.getElementById('todo-list')
    list.innerHTML = ''
    todoList.forEach(task => {
        const item = document.createElement('li')
        item.className = task.done ? 'done' : ''
        item.innerHTML = `
            <input type="checkbox" onchange="toggleTask(${task.id})" ${task.done ? 'checked' : ''}>
            <span>${task.text}</span>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `
        list.appendChild(item)
    })
}

if(typeof module !== 'undefined') {
    module.exports = { addTask, toggleTask, deleteTask, todoList };
}
