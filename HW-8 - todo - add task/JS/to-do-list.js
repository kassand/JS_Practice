// To do list v.1
const addTaskButton = document.querySelector('.add-task');

addTaskButton.addEventListener("click", onClick);
const ulForTasks = document.getElementById('added-task');
let inputValue = document.getElementById('task-name'); 

function onClick() {

    let addTask = document.createElement('li');   
    let itemName = document.createTextNode(inputValue.value);

    addTask.appendChild(itemName);
    console.log(itemName);

    if (inputValue.value === '') {
        alert("Write a task name");
      } else {
        ulForTasks.appendChild(addTask);
      }
      
      inputValue.value = "";
    // I do not understand why input is not clear when I use varible inputValue here:
    // inputValue = ""; -Fixed. Thanks.

}