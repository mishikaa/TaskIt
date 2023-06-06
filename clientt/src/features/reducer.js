import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    toDoList: 0
};

export const todoSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state+=1;
        },
        decrement: (state) => {
            state-=1;
        }
    }
})
