document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    handleToDo(document.getElementById("new-task-description").value)
  })

  function handleToDo (toDo) {
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.innerHTML = "x";
    button.addEventListener("click", (e) => {
      //deleting on button press
      e.target.parentNode.remove();
    });
    li.innerHTML = toDo + " ";
    li.appendChild(button);
    document.getElementById("tasks").appendChild(li);   
  }
});
