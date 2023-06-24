import { createSlice } from "@reduxjs/toolkit"

export const doneSlice = createSlice({
    name: 'done',
    initialState: [],
    reducers:  {
        getDoneTodo: (state, {payload}) => {
            if(payload.length>=0)   {
                state = payload;
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { getDoneTodo } = doneSlice.actions

export default doneSlice.reducer