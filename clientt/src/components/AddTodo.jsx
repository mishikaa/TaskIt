import React, { Fragment, useState } from "react";
import {SelectButton}from './Button';
import Button from "./Button";

const AddTodo = () => {
    const [description, setDescription] = useState("");
    const TodoAdd = (e => {
        // console.log(e.target); //It contains the input text
        setDescription(e.target.value);
    })
    const submitForm = async(e) => {
        e.preventDefault(); //Prevents refreshing the page on submitting
        try {
            const body = {description};
            const res = await fetch("http://localhost:5000/todos",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    }
    return (
        <>
        <div className="d-flex justify-content-center align-items-center m-5">
            <form className="input-group mb-4" onSubmit={submitForm}>
                <input type="text" placeholder="Add your task.." value={description} className="form-control" onChange={TodoAdd} />
                <Button variant="primary">+</Button>
            </form> 
        </div>
        <div>
            <SelectButton>
                <option value="all">All</option>
                <option value="todo">ToDo</option>
                <option value="done">Done</option>
            </SelectButton>
        </div>
        </>
    )
}

export default AddTodo;