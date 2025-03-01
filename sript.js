function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value === '') {
    alert('Please enter a task');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `${taskInput.value} <button onclick="removeTask(this)">X</button>`;
  taskList.appendChild(li);
  taskInput.value = '';
}

function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}
