// function reducer() {
//     return {
//         count : 0
//     }
// }

function reducer(state, action) {

    console.log('reducer');
    if (action.type === 'increment') {
        console.log('inside increment= ', state.count + 1)
        return {
            count: state.count + 1
        }

    }
    if (action.type === 'decrement') {
        return {
            count: state.count - 1
        }
    }
    return state;
}

export default reducer;