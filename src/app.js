function saveTask() {
    console.log("Save button clicked");
    //get the values from the form
    const title = $("#txtTitle").val();
    const description = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();
    console.log(title, description, color, date, status, budget);
    //build the task object
    let newTask = new Task(title, description, color, date, status, budget);
    console.log(newTask);
    //send the task object to the server
    

    //display the task in the list section
    displayTask(newTask);


}
function displayTask(task) 
{
    //this is the homework
    let taskHtml = `<div class="task ">
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <p>Date: ${task.date}</p>
        <p>Status: ${task.status}</p>
        <p>Budget: ${task.budget}</p>`
    $(".get-list").append(taskHtml);
    
}

function init() {
    console.log("App initialized");
    //load data

    //hook events
    $("#btnSave").click(saveTask);
   
}

window.onload = init;// this waits for the DOM to be fully loaded before running init 
//it waits until the html and css are fully loaded before running the init function