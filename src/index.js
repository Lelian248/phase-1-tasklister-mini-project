
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form")
  const list = document.querySelector("#tasks")
  
  form.addEventListener("submit",(e)=>{
      e.preventDefault();
      console.log("doneS")
      const element = document.createElement("li")
      element.innerHTML = e.target[0].value
      const deleteButton = document.createElement("button")
      deleteButton.innerHTML = "remove"
      deleteButton.addEventListener("click",deleteTask)
      element.appendChild(deleteButton)
      list.appendChild(element)
      
  })
});

function deleteTask(e){
  e.preventDefault();
  console.log("beyyy")
  e.currentTarget.parentElement.remove();
  
}




