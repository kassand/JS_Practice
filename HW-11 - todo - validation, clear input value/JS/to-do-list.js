// To do list v.3
const addTaskButton = document.querySelector('.add-task');
addTaskButton.addEventListener("click", onClick);
addTaskButton.disabled = true;

const errorMessage = document.querySelector('.show-error');

const ulForTasks = document.getElementById('added-task');
let inputValue = document.getElementById('task-name'); 
inputValue.addEventListener("keydown", onInputCheck);
inputValue.addEventListener("keyup", onInputValidate);

let addTask = document.createElement('li');
addTask.className = "todo-item";
// let todoItem = document.querySelector('.todo-item'); 
// addTask.addEventListener("click", onTodoClick);

// Create li
function addTodo () {
  let addTask = document.createElement('li');   
  addTask.className = "todo-item";
  
  let itemName = document.createTextNode(inputValue.value);
  addTask.appendChild(itemName);
  ulForTasks.appendChild(addTask); 

  const span = document.createElement("SPAN");
  const closeIcon = document.createTextNode("x");
  span.className = "close";
  span.appendChild(closeIcon);
  addTask.appendChild(span);

  addTask.addEventListener("click", onTodoClick);
  function onTodoClick(el) {
  if(el.target.className === "close") {
    console.log(el.target);
    deleteTask(el.target);
  }  
  changeBg(el.target); 
}
// Delete task 
function deleteTask () {

  addTask.closest(".todo-item").remove();

}
  
// Change color 
function changeBg() {

  addTask.classList.toggle("clicked");

}  

} 

// Add new todo on button click 
function onClick(e) {  
    
  addTodo (e);  
      
  clearInputValue ();
  addTaskButton.disabled = true;

}  

// addTask.addEventListener("click", onTodoClick);

// Events on todo click 
// function onTodoClick(el) {
//     console.dir(el.target);

  // if(el.target.className === "close") {
  //   console.log(el.target);
  //   deleteTask(el.target);
  // }  
  // changeBg(el.target); 
// } 
       
// Delete task 
//  function deleteTask () {

//   addTask.closest(".todo-item").remove();

// }
  
// Change color 
// function changeBg() {

//   addTask.classList.toggle("clicked");

// }  

 
function clearInputValue () {

  inputValue.value = "";

}

function onInputCheck(e) {    

  if (e.keyCode === 13) {    
    addTodo();
    clearInputValue();
  }
  
  if (e.keyCode === 8 && e.shiftKey ) {
    clearInputValue();
  }
}

function onInputValidate(e) {

  if(!e.target.value.trim()) {
    errorMessage.innerText = "";
    addTaskButton.disabled = true;

    return;
  }
  
  if (e.target.value.trim().length <= 5) {
    errorMessage.innerText = "This field should contain more than 5 letters.";
    addTaskButton.disabled = true;

    return;
  }
  errorMessage.innerText = "";
  addTaskButton.disabled = false;
}




 

