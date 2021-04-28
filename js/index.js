numberOfTasks = 0;
const addTask =(e)=>{
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
//---------------------------------------------create checkbox for done tasks
var newCheckbox = document.createElement("input");
newCheckbox.setAttribute("type","checkbox");
//---------------------------------------------append checkbox to section;
newTaskSection.appendChild(newCheckbox);
// -----------------------------------------append section to task list
document.getElementById("toDoList").insertBefore(newTaskSection,newTaskForm)
numberOfTasks++;
//-------------------------------------------------clear user input field
document.getElementById("newTask").value ="";
// -----------------------------------------------check if page is full 
if(numberOfTasks==8){
// -----------------------------------------------Delete form
  document.getElementById("toDoList").removeChild(newTaskForm)
}
}

const timeStamp = () => {
    var today = new Date();
    var day = String(today.getDate()).padStart(2, '0');
    var month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var year = today.getFullYear();
    today =  month + '/' + day + '/' + year;
    return today
}
document.getElementById("timeStamp").innerHTML=timeStamp();


const randomColor=()=>{
    // return random number between 0 and 100 and then add 155 to it. (3times) to generate smooth light colors.
    newRGBvalues=[155,155,155];
    for (i=0;i<=3;i++){
    newRGBvalues[i]+=(Math.floor(Math.random() * 101))
    }
    return `rgb(${newRGBvalues[0]},${newRGBvalues[1]},${newRGBvalues[2]})`
}

document.querySelector("form").addEventListener("submit", addTask);
