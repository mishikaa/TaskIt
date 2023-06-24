import React from "react";
import Done from './Done';
import All from './All';
import ToDo from "./ToDo";


const imgSize = {
    width: "2rem",
    borderRadius: "50px",
    boxShadow: "3px 3px 5px #454955",
    margin: "0.5rem",
}

const DivBar = (props) => {
    // const myState = useSelector((state) => state.counter.value);

    const handleDoneClick = () => {
        <Done />    
    }
    
    const handleToDoClick = () => {
        <ToDo todos={props.todos} setToDos={props.setToDos}/>    
    }

    const handleAllClick = () => {
        <All todos={props.todos} setToDos={props.setToDos}/>    
    }

    return (
        <div className="d-flex justify-content-around">
            <div>
                <img onClick={handleToDoClick} src="assets/toDoIcon.png" alt="to-do" style={imgSize}/>
                {/* <div>To-do({props.countAll-props.countDone})</div> */}
                <div>To-do()</div>
            </div>
            <div>
                <img onClick={handleDoneClick} src="assets/doneIcon.png" alt="to-do" style={imgSize}/>
                <div>Done()</div>
            </div>
            <div>
                <img onClick={handleAllClick} src="assets/allIcon.png" alt="to-do" style={imgSize}/>
                {/* <div>All({props.countAll})</div> */}
                <div>All()</div>
            </div>
        </div>
    )
}

export default DivBar;