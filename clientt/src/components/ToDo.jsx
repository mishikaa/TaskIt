import { format } from 'date-fns';

import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { COMPLETE_TODO } from '../features/todoSlice';

export default function ToDo(props) {
    var [isDone, setDone] = useState(false);
    const todoss = useSelector((state)=>state.todo);

    const dispatch = useDispatch();
  
    const markAsDone = async() => {    
        setDone(!isDone);
        props.setDoneArr((prev) => {
            if(!isDone) {
            return [...prev, props.todo]
        } else {
            return [...prev]
        }
    }
    )
};
    return (
        <>
            <td><img onClick={() => markAsDone()} src={isDone ? "assets/done.png" : "assets/notDone.png"} style={DoneStyling} alt="task"/></td>
            <td className="d-flex flex-column justify-content-around">
                <p className={isDone ? "crossline" : null}>{props.todo.description}</p>
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