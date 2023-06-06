import React from "react";
import { useSelector } from "react-redux";

export default body = () => {
    const todoList = useSelector(state => state.todo.list);
    console.log(todoList);
    return <div>This is body.</div>
}