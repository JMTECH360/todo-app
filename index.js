// Define all element
const form = document.getElementById("form");
const text = document.getElementById("text");
const message = document.getElementById("message");
const list = document.getElementById("list");

// Todo Id
const todoId = ()=>{
    return Date.now();
}

// Delete Todo

const deleteToDo = (event)=>{
    const li = event.parentElement;
    const del = li.querySelector("#delete");
    del.addEventListener("click", function(){
        list.removeChild(li);
        todoMessage("Deleted", "delete")
    })


}

// todo message
const todoMessage = (text ,status )=>{

    message.innerHTML = text;
    message.classList.add(`message-${status}`);

    setTimeout(function(){
        message.innerHTML = "";
        message.classList.remove(`message-${status}`)
    }, 1000)

}


// create Todo
const createTodo=(value, listid)=>{

    const li = document.createElement("li");
    li.id = listid;
    li.innerHTML = `${value}<button id="delete"><i class="fas fa-trash"></i></button>`;
    list.appendChild(li);
    const deleteButton = li.querySelector("#delete");
    deleteToDo(deleteButton);

    
};


// add data to localStorage
const settodos = (todoid, todovalue)=>{

    localStorage.setItem(`${todoid}`, `${todovalue}`)

}

// remove data to localStorage
const removetodo = (todoid, todovalue)=>{

    localStorage.removeItem(`${todoid}`, `${todovalue}`)

}



// todo added
form.addEventListener("submit", (event)=>{
    event.preventDefault();

    const todovalue = text.value;
    const liId  = todoId(); 
createTodo(todovalue, liId);
todoMessage("todo Created", "success")
settodos(liId, todovalue);
text.value = "";
water()
})





window.addEventListener("mouseover", water);

function water(){
    if(list.children.length==1){
        list.classList.add("watermark")
        document.getElementById("watermark-text").style.display = "block";
    }else{
        list.classList.remove("watermark");
        document.getElementById("watermark-text").style.display = "none";
    }
}



localStorage.removeItem("name", "jahid")