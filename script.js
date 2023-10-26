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





// create todo item
const createTodo = document.querySelector('.todo_modal-create');
const todoList = document.querySelector('.todo_list');
// const form = document.querySelector('form');

createTodo.addEventListener('click', function(e) {
    e.preventDefault();

    const todoInput = document.querySelector('.todo_modal-input').value;
    const todoItemHTML = `
        <div class="todo_item">
            <div class="todo_item-left">
                <i class="fa-solid fa-square-check checkTodo"></i>
                <p class="text1 todo_input" contenteditable="false">${todoInput}</p>
            </div>
            <div class="todo_item-right">
                <i class="fa-regular fa-pen-to-square edit"></i>
                <i class="fa-solid fa-trash-can delete"></i>
            </div>
        </div>
    `;

    todoList.insertAdjacentHTML('beforeend', todoItemHTML);
    modal.reset();
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
        const todoStrike = e.target.closest('.todo_item').querySelector('.todo_input');
        if (todoStrike) {
            todoStrike.classList.toggle('strike');
        }
        
    }
});


// edit ==================================================================

const editModal = document.querySelector('.edit_modal');
const editTodoBtn = document.querySelector('.edit_modal-create');
const closeEditBtn = document.querySelector('.close-edit');

// hide edit modal on load
editModal.classList.add('hidden');

// show edit modal function
function showEditModal() {
    editModal.classList.remove('hidden');
}

// close edit modal function
function closeEditModal() {
    editModal.classList.add('hidden');
}

closeEditBtn.addEventListener('click', closeEditModal);
document.addEventListener('keydown', escapeKey);

// edit todo item
todoList.addEventListener('click', function(e){
    if (e.target.classList.contains('edit')) {
        
        const todoEdit = e.target.closest('.todo_item').querySelector('.edit');
        if (todoEdit) {
            const todoInput = e.target.closest('.todo_item').querySelector('.todo_input');
            const todoItemContainer = e.target.closest('.todo_item');

            // toggle contenteditable
            if (todoInput.contentEditable === "false") {
                // e.target.closest('.todo_item').style.border = "2px solid red;"
                console.log(todoItemContainer)
                todoInput.contentEditable = "true"
            }  else if (todoInput.contentEditable === "true") {
                todoInput.contentEditable = "false"
            }

            // todoInput.classList.toggle('contenteditable');

            // let editValue = document.querySelector('.edit_modal-input').value;
            // todoInput.textContent = editValue;

            // showEditModal(e);
        }
    }
});


// editTodoBtn.addEventListener('click', function(e) {
//     e.preventDefault();

//     // let editValue = document.querySelector('.edit_modal-input').value;
//     // todoInput.textContent = editValue;

//     if (e.target.classList.contains('edit_modal-create')) {
        
//         const todoEdit = e.target.closest('.edit_modal').querySelector('.edit_modal-create');
//         if (todoEdit) {
//             // const todoInput = e.target.closest('.todo_item').querySelector('.todo_input');
//             // console.log(todoInput.textContent);

//             let editValue = document.querySelector('.edit_modal-input').value;
//             todoInput.textContent = editValue;

//             closeEditModal(e);
//         }
//     }
// });