function reducer(state,action) {
    if(action.type === 'addTodo'){
        console.log('reducer');
        state.todoList.push(action.todoDetails);
        console.log(state.todoList);
    }
    return state;
}
export default reducer;