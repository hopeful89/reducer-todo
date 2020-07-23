
//we need init state, reducer default return
//shape will be {item: '', completed: false, will add id at creation}
//will need ability to add to state
//need to create custom localStorage hook

export const initState = [];
    // item: '',
    // completed: false,
    // id: 1
    //add item at creation with Date.now()


export const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TODO":
            // console.log('bs: reducer index.js: action', action)
            return [...state, {...initState, completed: false, item: action.payload, appointment: action.appointment, id: Date.now()}]
        case "CLEAR_COMPLETED":
                // console.log('what is going on')
                return state.filter(obj => !obj.completed)
        case "IS_COMPLETE":
            // console.log('is complete')
                state.map(stateobj => {
                   return (stateobj.id === action.id ? stateobj.completed = action.completed : undefined)
                })
        default: 
            return state
    }
}