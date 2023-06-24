import React from "react";
import Done from './Done';
import All from './All';
import ToDo from "./ToDo";
import { useSelector, useDispatch } from "react-redux";


const imgSize = {
    width: "2rem",
    borderRadius: "50px",
    boxShadow: "3px 3px 5px #454955",
    margin: "0.5rem",
    cursor: 'pointer'
}

const DivBar = () => {
    const todoCount = useSelector((state)=>state.todo.length);
    const doneCount = useSelector((state)=>state.done.length);
    
    const dispatch = useDispatch();

    const handleDoneClick = () => {
        <Done />    
    }
    
    const handleToDoClick = () => {
        <ToDo />    
    }

    const handleAllClick = () => {
        <All />    
    }

    return (
        <div className="d-flex justify-content-around">
            <div>
                <img onClick={handleToDoClick} src="assets/toDoIcon.png" alt="to-do" style={imgSize}/>
                <div>To-do({todoCount})</div>
            </div>
            <div>
                <img onClick={handleDoneClick} src="assets/doneIcon.png" alt="to-do" style={imgSize}/>
                <div>Done({doneCount})</div>
            </div>
            <div>
                <img onClick={handleAllClick} src="assets/allIcon.png" alt="to-do" style={imgSize}/>
                <div>All({todoCount+doneCount})</div>
            </div>
        </div>
    )
}

export default DivBar;