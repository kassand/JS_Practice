// To do list v.1
const addTaskButton = document.querySelector('.add-task');

addTaskButton.addEventListener("click", onClick);

function onClick() {
    let addTask = document.createElement('li');
    let inputValue = document.getElementById('task-name').value;
    
    const ulForTasks = document.getElementById('added-task');
    
    let itemName = document.createTextNode(inputValue);
    addTask.appendChild(itemName);
    console.log(itemName);

    if (inputValue === '') {
        alert("Write a task name");
      } else {
        ulForTasks.appendChild(addTask);
      }
      
    document.getElementById('task-name').value = "";
    // I do not understand why input is not clear when I use varible inputValue here:
    // inputValue = "";

}