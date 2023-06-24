import { createSlice } from "@reduxjs/toolkit"

const reducers  =  (state, action) => {
    switch(action.type) {
        
        case "APPEND_TODO": 
            return { // returning a copy of orignal state 
             ...state, //copying the original state
             todos: [...state.todos, action.payload] //new todos array 
            }
            
        case "DELETE_TODO": 
            return {  // returning a copy of orignal state
                ...state, //copying the original state
                todos: state.todos.filter(todo => todo.id !== action.payload) 
                // returns a new filtered todos array
            }
        
        case "COMPLETE_TODO": 
        {
            const index = state.todos.findIndex(todo => todo.id !== action.payload); //finding index of the item
            const newArray = [...state.todos]; //making a new array
            newArray[index].completed = true//changing value in the new array
            return { 
             ...state, //copying the orignal state
             todos: newArray, //reassingning todos to new array
            }
        }

        default: 
            return state;
    }      
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers
});

// Action creators are generated for each case reducer function
export const { APPEND_TODO, DELETE_TODO, COMPLETE_TODO } = todoSlice.actions

export default todoSlice.reducer