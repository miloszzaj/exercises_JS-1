const toDoList = []

const input = document.querySelector('input')
const ul = document.querySelector('ul')
const liElements = document.querySelectorAll('li')
const form = document.querySelector('form');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');

const searchTask = (e) => {
const searchText = e.target.value.toLowerCase()
// let tasks = [...liElements]
tasks = toDoList.filter(li => li.textContent.toLowerCase().includes(searchText))
ul.textContent = ""
tasks.forEach(li => ul.appendChild(li))
}

const removeTask = (e) => {
    const index = e.target.parentNode.dataset.key
    toDoList.splice(index,1)
    taskNumber.textContent = toDoList.length
    // renderList()
    }

const addTask = (e) => {
e.preventDefault();
const titleTask = input.value;
if(titleTask ==="") return;
const task = document.createElement('li');
task.className = 'task';
task.innerHTML = titleTask +"<button>Usuń</button>"
toDoList.push(task)
renderList()
ul.appendChild(task)
input.value = ""
// const liItems = document.querySelectorAll('li.task').length;
taskNumber.textContent = listItems.length;
task.querySelector('button').addEventListener('click', removeTask)
}

const renderList = () => {
ul.textContent = ""
toDoList.forEach((toDoElement, key) => {
toDoElement.dataset.key = key;
ul.appendChild(toDoElement)
})
}

form.addEventListener('submit', addTask)
input.addEventListener('input', searchTask)