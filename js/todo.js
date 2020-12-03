//Create DOM element
function createTodoItem(title) {
    const checkbox = document.createElement('input');
    //change attribute type and set className
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

    const label = document.createElement('label');
    
    //Set inner text for label
    label.innerText = title;
    label.className = 'title';

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'textfield';

    const editButton = document.createElement('button');
    //Set inner text for edit button
    editButton.innerText = 'Edit';
    editButton.className = 'edit';

    const deleteButton = document.createElement('button');
    //Set inner text for delete button
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete';

    //Create li element
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    //Place all created items into li
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    console.log(listItem);

    bindEvents(listItem); //Subscribe to events Bind items

    return listItem;
}

//Bind Events
function bindEvents(todoItem) {
    const checkbox = todoItem.querySelector('.checkbox'); //gain access to DOM elements
    const editButton = todoItem.querySelector('button.edit');
    const deleteButton = todoItem.querySelector('button.delete');

    checkbox.addEventListener('change', toggleTodoItem);
    editButton.addEventListener('click', editTodoItem);
    deleteButton.addEventListener('click', deleteTodoItem);
}

function addTodoItem(event) {
    event.preventDefault(); //Stop send to server. Don't reload page when submitted

    //if empty string submitted show error
    if(addInput.value === '') {
        return alert('Please, enter the name for the task');
    }
        
    
    const todoItem = createTodoItem(addInput.value);
    todoList.appendChild(todoItem);
    addInput.value = ''; //make string empty
}


function toggleTodoItem() {
    const listItem = this.parentNode;
    listItem.classList.toggle('completed');
}

function editTodoItem() {
    const listItem = this.parentNode;
    const title = listItem.querySelector('.title');
    const editInput = listItem.querySelector('.textfield');
    const isEditing = listItem.classList.contains('editing');

    if (isEditing) {
        title.innerText = editInput.value; //assign value from edit field to innertext
        this.innerText = 'Edit';
    } else {
        editInput.value = title.innerText;
        this.innerText = 'Save';
    }
    listItem.classList.toggle('editing');
}

function deleteTodoItem() {

};

const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todoItems = document.querySelectorAll('.todo-item');

todoForm.addEventListener('submit', addTodoItem);
