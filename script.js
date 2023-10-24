//using javascript to manipulate classes
//manipulation of css styles

// const showModalButton = document.querySelectorAll(".btn");
// const modal = document.querySelector(".modal");
// const closeModal = document.querySelector(".closeModal");
// 

// for(let i = 0; i < showModalButton.length; i++){
//     showModalButton[i].addEventListener('click', function(){
//         modal.classList.remove('hidden')
//         body.style.backgroundColor = 'red'

//     })
// };

// closeModal.addEventListener('click', function() {
//     modal.classList.add('hidden')
// })

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
const todoItem = document.querySelector('.todo_item');
const todoList = document.querySelector('.todo_list');
const form = document.querySelector('form');


createTodo.addEventListener('click', function(e) {
    e.preventDefault();

    
    const todoInput = document.querySelector('.todo_modal-input').value;
    const todoItemHTML = `
        <div class="todo_item">
            <div class="todo_item-left">
                <i class="fa-solid fa-square-check"></i>
                <!-- <i class="fa-regular fa-square-check"></i> -->
                <p class="text1">${todoInput}</p>
            </div>
            <div class="todo_item-right">
                <i class="fa-regular fa-pen-to-square edit"></i>
                <i class="fa-solid fa-trash-can delete"></i>
            </div>
        </div>
    `;

    todoList.insertAdjacentHTML('beforebegin', todoItemHTML);
    document.querySelector('form').reset();


})









// deleteBtn.addEventListener("click", function(){
//     todo.childNodes.remove()
// })

