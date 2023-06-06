import { format } from 'date-fns';
import React from "react";
import './isDone.css'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {increment} from '../features/reducer';

const Done = (props) => {
    var [isDone, setDone] = useState(false);
    const myState = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    // console.log(myState);

    const markAsDone = async() => {
        
        // dispatch(increment());
        // setDone(!isDone);
    //     props.setDoneArr((prev) => {
    //         if(!isDone) {
    //         return [...prev, props.todo]
    //     } else {
    //         return [...prev]
    //     }
    // }
    // )
};
    // return (
    //     <>
    //         <td><img onClick={() => markAsDone()} src={isDone ? "assets/done.png" : "assets/notDone.png"} alt="task" style={DoneStyling}/></td>
    //         <td className="d-flex flex-column justify-content-around">
    //             <p className={isDone ? "crossline" : null}>{props.todo.description}</p>
    //             <span className="text-muted align-self-end">
    //                 ~ {format(new Date(props.todo.time), 'p, MM/dd/yyyy')}
    //             </span>
    //         </td>
    //     </>
    // )
    return (
        <>
            <td><img onClick={() => markAsDone()} src="assets/done.png" alt="task" style={DoneStyling}/></td>
            <td className="d-flex flex-column justify-content-around">
                <p className="crossline">{props.todo.description}</p>
                <span className="text-muted align-self-end">
                    ~ {format(new Date(props.todo.time), 'p, MM/dd/yyyy')}
                </span>
            </td>
        </>
    )
}

const DoneStyling = {
    width: "1.5rem",
    cursor: "pointer"
}

export default Done;