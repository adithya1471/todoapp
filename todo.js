let element = document.getElementById("taskin");
let tasklist = document.getElementById("tasklist");

document.getElementById("add").onclick = function(){
    if(element.value.length==0){
        alert("Enter a Task");
    }
    else{
        tasklist.innerHTML = tasklist.innerHTML+`
        <div class= "task">
        <span id="work">${element.value}</span>
        <button class="del"><i class="fa-solid fa-trash-can"></i></button>
        <div>`
        let allTasks = document.querySelectorAll('.del');
        for(i=0;i<allTasks.length;i++){
            allTasks[i].onclick = function(){
                this.parentNode.remove()
            }
        }
        element.value = "";
    }
}