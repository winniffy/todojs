const body = document.querySelector('body');
const showModalBtn = document.querySelector('.create');
const modal = document.querySelector('.todo_modal');
const closeModalBtn = document.querySelector('.close-modal');

// hide modal on load
modal.classList.add('hidden');

// show todo list modal function
function showModal() {
    modal.classList.remove('hidden');
}

// close todo list modal function
function closeModal() {
    modal.classList.add('hidden');
}

// close modal with escape key
function escapeKey(e) {
    if (e.key === "Escape") {
        closeModal(e);
    }
};


showModalBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', closeModal);
document.addEventListener('keydown', escapeKey);





const createTodo = document.querySelector('.todo_modal-create');
const todoList = document.querySelector('.todo_list');
const form = document.querySelector('form');


// create todo item
createTodo.addEventListener('click', function(e) {
    e.preventDefault();

    const todoInput = document.querySelector('.todo_modal-input').value;
    const todoItemHTML = `
        <div class="todo_item">
            <div class="todo_item-left">
                <i class="fa-solid fa-square-check checkTodo"></i>
                <p class="text1 todo_input">${todoInput}</p>
            </div>
            <div class="todo_item-right">
                <i class="fa-regular fa-pen-to-square edit"></i>
                <i class="fa-solid fa-trash-can delete"></i>
            </div>
        </div>
    `;

    todoList.insertAdjacentHTML('beforeend', todoItemHTML);
    document.querySelector('form').reset();
    closeModal();

});

// delete todo item
todoList.addEventListener('click', function(e){
    if (e.target.classList.contains('delete')) {
        const todoItem = e.target.closest('.todo_item');
        if (todoItem) {
            todoItem.remove();   
        }
    }
});

// check todo item
todoList.addEventListener('click', function(e) {
    if (e.target.classList.contains('checkTodo')) {
        e.target.classList.toggle('check');

        // add strikethrough
        const todoStrike = e.target.closest('.todo_item').querySelectorAll('.todo_input');
        if (todoStrike) {
            todoStrike.classList.toggle('strike');
        }
        
    }
});

// const todoInputText = document.querySelectorAll('.todo_input');

        // for (let i = 0; i < todoInputText.length; i++) {
        //     // if (!todoInputText[i].classList.contains('strike')) {
        //     //     console.log(todoInputText[i]);
        //     //     todoInputText[i].classList.toggle('strike');
        //     // }
        //     console.log(todoInputText)
        // }

        // if (e.target.classList.contains('.todo_input')) {
        //     console.log("check")
        //     e.classList.toggle('strike')
        // }