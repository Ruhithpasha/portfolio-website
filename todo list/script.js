
var inputbox=document.querySelector("#input-box");
var listContainer=document.getElementById("list-container");
var button=document.querySelector("#btn")
button.addEventListener("click",function addTask(value){
    if (inputbox.value === '') {
        alert("enter a todo task");
    }
    else{
        var li=document.createElement("li")
        li.innerHTML=inputbox.value;
        listContainer.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputbox.value=''
    saveData();
})





listContainer.addEventListener("click",function (e) {
    if (e.target.tagName ==="LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
},false)

function saveData(params) {
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showTask();