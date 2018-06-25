import {connect} from 'react-redux';
import App from './App';

const mapStateToProps = function (state) {
    return {
        todo : state.todo,
        todoList : state.todoList
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        
        addTodo: function () {
            console.log('inside add');
            dispatch({
                type: 'addTodo',
                todoDetails: {
                    name : document.getElementById("todoInput").value,
                    date : document.getElementById("dateInput").value
                }
            })
            // this.showTodo();
        },
        showTodo: function() {
            var ul = document.querySelector("ul");
            ul.innerHTML="";
            var li = document.createElement("li");
            for(let i = 0; i<this.state.todoList.length-1; i++){
                var button = document.createElement("button");
                button.setAttribute("id",i);
                button.setAttribute("onclick","deleteTodo(event)");
                button.innerHTML("Delete");
                li.append(this.state.todoList[i].name);
                li.append(this.state.todoList[i].date);
                li.appendChild(button);
                ul.appendChild(li);
            }
        }
        // deleteTodo: function () {
        //     dispatch({
        //         type: 'delete',

        //     })
        // }
    }
}

const mergeProps = function (stateProps, dispatchProps, ownProps) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);