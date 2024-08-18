document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskItem = createTaskElement(taskText);
    document.getElementById('task-list').appendChild(taskItem);

    taskInput.value = '';
}

function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.innerText = taskText;
    
    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.className = 'edit-btn';
    editBtn.addEventListener('click', () => editTask(li));
    
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => deleteTask(li));
    
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    
    li.addEventListener('click', () => toggleComplete(li));
    
    return li;
}

function toggleComplete(taskItem) {
    taskItem.classList.toggle('completed');
}

function deleteTask(taskItem) {
    if (confirm('Are you sure you want to delete this task?')) {
        taskItem.remove();
    }
}

function editTask(taskItem) {
    const newTaskText = prompt('Edit your task:', taskItem.innerText);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskItem.firstChild.nodeValue = newTaskText.trim();
    }
}
