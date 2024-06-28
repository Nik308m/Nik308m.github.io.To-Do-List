// Function to add a new todo
function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const todoList = document.getElementById('todoList');

        // Create li element for todo
        const li = document.createElement('li');
        li.innerHTML = `<span>${todoText}</span>
                        <button onclick="toggleCompleted(this)">Done</button>
                        <button onclick="removeTodo(this)">Remove</button>`;
        
        // Append li to todo list
        todoList.appendChild(li);

        // Clear input
        todoInput.value = '';
    }
}

// Function to toggle todo completion
function toggleCompleted(todoButton) {
    const li = todoButton.parentElement;
    li.classList.toggle('completed');

    if (li.classList.contains('completed')) {
        todoButton.textContent = 'Undo';
    } else {
        todoButton.textContent = 'Done';
    }
}

// Function to remove a todo
function removeTodo(todoButton) {
    todoButton.parentElement.remove();
}

// Warning for data loss on refresh
window.onload = function() {
    alert("Warning: This todo list does not save data locally. Reloading the page will clear all todos.");
};
