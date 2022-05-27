// To do list v.2
const addTaskButton = document.querySelector('.add-task');

addTaskButton.addEventListener("click", onClick);

const ulForTasks = document.getElementById('added-task');
let inputValue = document.getElementById('task-name'); 

function onClick() {

    let addTask = document.createElement('li');   
    addTask.className = "todo-item";
    let todoItem = document.querySelectorAll('todo-item');
    let itemName = document.createTextNode(inputValue.value);

    addTask.appendChild(itemName);

    if (inputValue.value === '') {
        alert("Write a task name");
      } else {
        ulForTasks.appendChild(addTask);
      }
      
      clearInputValue ();
      
      const span = document.createElement("SPAN");
      const closeIcon = document.createTextNode("x");
      span.className = "close";
      span.appendChild(closeIcon);
      addTask.appendChild(span);

      addTask.addEventListener("click", onTodoClick);

      function onTodoClick(el) {

      //  I can not figure out why forEach() medod does not work 

        // todoItem.forEach(function(elem) {
        //   if(elem.target.className === "close") {
        //     deleteTask (elem.target);
        //   }

        // }); 

          if(el.target.className === "close") {
            deleteTask (el.target);
          }  
        
        changeBg(el);        
      }
            
      // Delete task 
      function deleteTask (elem) {

        elem.closest(".todo-item").remove();

      }
      
      // Change color 
      function changeBg() {

        addTask.classList.toggle("clicked");

      }         
}

function clearInputValue () {

  inputValue.value = "";

}



 

