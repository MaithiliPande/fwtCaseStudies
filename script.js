function createStore(_reducer){
    var state = {
        todo : {
        name: String,
        date: Date 
        },
        todos : []
    };
    function getState() {
        return state;
    }
    
    function dispatch(action){
        console.log(state);
        state = _reducer(state , action);
    }
return {
dispatch,
getState
    }
}
    
function reducer(state , action){
    var _state = state;
    if(action.type === 'add'){
      _state.todos.push(action.data);
    }
    if(action.type === 'delete'){
      _state.todos.splice(action.data.id , 1);
    }
    console.log(_state);
    return _state;
}
        
var store = createStore(reducer);

function addTodo(name,date){
    this.store.dispatch({
        type : 'add',
        data : {
        name : name,
        date : date     
    }
    })  
}

var todostate = this.store.getState();

function displayTodos(todostate){
    var ul = document.getElementById("todoList");
    ul.innerHTML = "";
    var li = document.createElement("li");
    for(let i=0;i<this.todostate.todos.length;i++){
    var tr = document.createElement("tr");
    var button = document.createElement("button");
    button.setAttribute("name" , "deletebutton");
    button.setAttribute("onclick" , "deletetodo(event)");
    button.innerHTML = "Delete";
    button.setAttribute("id" , i);
    li.append(this.todostate.todos[i].name);
    li.append(this.todostate.todos[i].date);
    li.appendChild(button);
    ul.appendChild(li);
    }
    console.log(ul);
}

function deletetodo(){
    this.store.dispatch({
        type : 'delete',
        data : {
        id : event.target.id
    }})
    displayTodos();
}

document.getElementById('addTodo').addEventListener('click' , function(){
var todo = document.getElementById("todoTask").value;
var date = document.getElementById("todoDate").value;
addTodo(todo , date);
displayTodos();    
}) 