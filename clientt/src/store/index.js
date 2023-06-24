import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";
import doneReducer from "../features/doneSlice";

const store= configureStore({
    reducer: {
        todo: todoReducer,
        done: doneReducer
    }
});

export default store;