let tasks = [];
var todoArea = document.getElementById('todoListArea');
function addTask(){
    var task = document.getElementById("todoBox1").value;
    var taskDate = document.getElementById("todoDate").value;
    if(task!==''){
        
        tasks.push({task, taskDate} );
        todoArea.innerHTML += "<div class='div_taskcontainer'>"+`<div class='div_task'>${task}</div>` + " "+`<div class='div_date'>${taskDate}</div>`+`<button class='btn_delete' onclick='deleteTask(${tasks.length-1})'>Delete</button>` + "</div>";
    }
    console.log(tasks);
    
    task = '';
}

function deleteTask(index){
    console.log(index);
    tasks.splice(index,1);
    rebuildTasksArray();
}

function rebuildTasksArray(){
    todoArea.innerHTML = '';
    for(let i=0; i<tasks.length; i++) {
        todoArea.innerHTML += "<div class='div_taskcontainer'>"+`<div class='div_task'>${tasks[i].task}</div>` + " "+`<div class='div_date'>${tasks[i].taskDate}</div>`+`<button class='btn_delete' onclick='deleteTask(${i})'>Delete</button>` + "</div>";
    
    }
}
