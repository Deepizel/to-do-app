const addForm = document.querySelector('.add');
const list = document.querySelector('.todolist');
const search = document.querySelector('.search input');

const generateTemplate = (todo) => {
   //todo being the parameter you want to insert inside of the function
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
             <span>${todo}</span>
             <p class="delete">X</p>
    </li>`;
    list.innerHTML += html;

};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim()
    //.add being the name of the input field
    if (todo.length) {
        generateTemplate(todo)
    };
    //to reset target the form not the value received
    addForm.reset();
  
});

//to delete items in the list, we target the form for a click event. this helps in time saving from attaching click events to every X in the list.
list.addEventListener('click', e => {
    
    if (e.currentTarget.classList.contains('delete')) {
        e.target.parentElement.remove();
    };
});

// tthe above code makes use of the .contain method which queries the click event if it contains the specified class, thus triggering the condition block of code //

const filterTodos = (term) => {
    Array.from(list.children)
        .filter((todo) => !todo.textcontent.toLowerCase().includes(term))
        .forEach((todo) => todo.classlst.add('filtered'));
    Array.from(list.children)
      .filter((todo) => todo.textcontent.toLowerCase().includes(term))
      .forEach((todo) => todo.classlst.remove("filtered"));
};

// keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
})