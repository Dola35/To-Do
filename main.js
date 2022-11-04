/* const body = document.body;

body.addEventListener("click", function (event) {
  const button = event.target;
  const buttonName = button.classList[0];
  console.log(buttonName);
  switch (buttonName) {
    case "delete-button":
      const taskBarToRemove = button.parentNode.parentNode;
      console.log(taskBarToRemove);
      taskBarToRemove.parentNode.removeChild(taskBarToRemove);
      break;
    default:
      break;
  }
}); */

function removeTaskBar() {
  const taskBarToRemove = this.parentNode.parentNode;
  taskBarToRemove.parentNode.removeChild(taskBarToRemove);

  /* removeEventListener; */
}
//markAsDone function
function markAsDone() {
  const taskDone = this.parentNode;
  taskDone.parentNode.style.backgroundColor = "lightgreen";
}
//end of the markAsDone function

function alertArrowButton() {
  alert(
    "We're still working on this feature! Please give us a couple more weeks of bootcamp to figure this one out."
  );

  /* removeEventListener; */
}

document.getElementById("add-task").onclick = function () {
  if (
    document.getElementById("new-task-input").value.length === 0 ||
    document.getElementById("new-task-input").value.length > 40
  ) {
    alert("Please Enter a Task or max length exceeded");
  } else {
    document.querySelector(".task-list").innerHTML += `
          <li class="task">
          <span class="added-task">${
            document.getElementById("new-task-input").value
          }</span>
            <div class="icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10%"
                height="100%"
                fill="currentColor"
                class="done-button bi bi-check-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                />
                <path
                  d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10%"
                height="100%"
                fill="currentColor"
                class="bi bi-pencil-square right-icon"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
                <svg
                class="delete-button bi bi-trash3-fill right-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="10%"
                height="100%"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"
                />
              </svg>
  
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10%"
                height="100%"
                fill="currentColor"
                class="up-button bi bi-arrow-up-circle-fill right-icon"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10%"
                height="100%"
                fill="currentColor"
                class="down-button bi bi-arrow-down-circle-fill right-icon"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                />
              </svg>
            </div>
          </li>`;

    const numOfTasks = document.getElementsByClassName("task").length;
    const deleteButtons = document.getElementsByClassName("delete-button");
    const deleteButtonsArray = Array.from(deleteButtons);
    deleteButtonsArray.forEach((button) => (button.onclick = removeTaskBar));

    const upButtons = document.getElementsByClassName("up-button");
    const upButtonsArray = Array.from(upButtons);
    upButtonsArray.forEach((button) => (button.onclick = alertArrowButton));

    const downButtons = document.getElementsByClassName("down-button");
    const downButtonsArray = Array.from(downButtons);
    downButtonsArray.forEach((button) => (button.onclick = alertArrowButton));

    //markAsDone button
    const doneButtons = document.getElementsByClassName("done-button");
    const doneButtonsArray = Array.from(doneButtons);
    doneButtonsArray.forEach((button) => (button.onclick = markAsDone));
    // end of the markAsDone button
  }
};
