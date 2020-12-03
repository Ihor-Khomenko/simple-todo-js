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
    editButton.innterText = 'Edit';
    editButton.className = 'edit';

    const deleteButton = document.createElement('button');
    //Set inner text for delete button
    deleteButton.innterText = 'Delete';
    deleteButton.className = 'delete';

    const li = document.createElement('li');
    listItem.className = 'todo-item';
    //Place all created items into li
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

}


function addTodoItem(event) {
    event.preventDedault(); //Stop send to server. Don't reload page when submitted

    //if empty string submitted show error
    if(addInput.value === '') return alert('Please, enter the name for the task');
    const listItem = createTodoItem(addInput.value);
}

const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todoItems = document.querySelectorAll('.todo-item');

todoForm.addEventListener('submit', addTodoItem);
