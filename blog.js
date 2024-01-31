document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskListContainer = document.getElementById('taskList');

    function getTasksFromLocalStorage() {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    }

    function updateLocalStorage(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function displayTasksFromLocalStorage() {
        const tasks = getTasksFromLocalStorage();

        tasks.forEach(task => {
            displayTask(task);
        });
    }

    function displayTask(task) {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.textContent = task;
        taskListContainer.appendChild(taskElement);
    }

    function addTask(event) {
        event.preventDefault();

        const task = taskInput.value.trim();

        if (task !== '') {
            displayTask(task);

            taskInput.value = '';

            const tasks = getTasksFromLocalStorage();
            tasks.push(task);

            updateLocalStorage(tasks);
        }
    }

    taskForm.addEventListener('submit', addTask);

    // Display tasks from local storage on page load
    displayTasksFromLocalStorage();
});
