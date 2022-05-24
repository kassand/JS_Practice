// To do list v.2
const addTaskButton = document.querySelector('.add-task');

addTaskButton.addEventListener("click", onClick);
const ulForTasks = document.getElementById('added-task');
let inputValue = document.getElementById('task-name'); 

function onClick() {

    let addTask = document.createElement('li');   
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

      var close = document.getElementsByClassName("close");
      var i;
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          let div = this.parentElement;
          div.style.display = "none";
        }
      }

      // Change bg color 
      addTask.addEventListener("click", changeBg);

      function changeBg() {

        addTask.classList.toggle("clicked");

      }     
      changeBg();

      // function onCloseClick(event) {
      //   onDeleteTask (event);
      // }
      // onCloseClick();
      
      // Delete task
      // function onDeleteTask (event) {
        // console.log(event.target);
      //   event.target.closest(".close-task").remove();
      // }
      // onDeleteTask();
     
}

function clearInputValue () {

  inputValue.value = "";

}



 

