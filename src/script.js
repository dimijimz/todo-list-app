document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const deleteListButton = document.getElementById('delete-list');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeIcon = document.getElementById('dark-mode-icon');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodo(todoInput.value);
        todoInput.value = '';
        updateDeleteListButtonVisibility();
    });

    deleteListButton.addEventListener('click', () => {
        todoList.innerHTML = '';
        updateDeleteListButtonVisibility();
    });

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeIcon.src = document.body.classList.contains('dark-mode') ? 'moon.png' : 'sun.png';
    });

    function addTodo(task) {
        const todoItem = document.createElement('li');
        todoItem.textContent = task;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            todoItem.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoItem.remove();
            updateDeleteListButtonVisibility();
        });

        todoItem.appendChild(completeButton);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
    }

    function updateDeleteListButtonVisibility() {
        if (todoList.children.length > 0) {
            deleteListButton.style.display = 'block';
        } else {
            deleteListButton.style.display = 'none';
        }
    }
});
