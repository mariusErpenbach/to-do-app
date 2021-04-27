numberOfTasks = 0;
const addTask =(e)=>{
    const randomColor=()=>{
        // return number random number between 0 and 100 and then add 155 to it. (3times) to generate smooth light colors.
        newRGBvalues=[155,155,155];
        for (i=0;i<=3;i++){
        newRGBvalues[i]+=(Math.floor(Math.random() * 101))
        }
        return `rgb(${newRGBvalues[0]},${newRGBvalues[1]},${newRGBvalues[2]})`
    }
    
    e.preventDefault();
// ----------------------------------------------------create new section
var newTaskSection = document.createElement("section");
newTaskSection.style.cssText += `background-color:${randomColor()}`;
// newTaskSection.setAttribute("id",`${numberOfTasks}-addedTask`)
// ----------------------------------------------------create p with the user input 
var newTaskPhrase = document.createElement("p");
// -------------------------------------------------------get user input
newPhrase = document.getElementById("newTask").value;
newTaskPhrase.innerHTML=newPhrase;
//---------------------------------------------append the p to the section
newTaskSection.appendChild(newTaskPhrase);
// -----------------------------------------append section to task list
document.getElementById("toDoList").insertBefore(newTaskSection,newTaskForm)
numberOfTasks++;
}


document.querySelector("form").addEventListener("submit", addTask);
