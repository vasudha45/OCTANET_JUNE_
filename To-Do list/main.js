const ipBox = document.getElementById("box");
const list = document.getElementById("list");

function addTask(){
    if(ipBox.value === ''){
        alert("Assign some task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = ipBox.value;
        list.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    ipBox.value = "";
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);
