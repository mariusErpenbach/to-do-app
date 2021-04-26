const addTask =()=>{
// create new section
var newTaskSection = document.createElement("section");
// create p with the user input 
var newTaskPhrase = document.createElement("p");
// get user input
newPhrase = document.getElementById("newTask").innerHTML;
newTaskPhrase.innerHTML=newPhrase;
//append the p to the section
newTaskSection.appendChild(newTaskPhrase);
// append section to task list
document.getElementById("toDoList").appendChild(newTaskSection)
}