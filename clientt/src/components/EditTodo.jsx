import React from "react";
import { useState } from "react";

const EditTodo = ({todo}) => {
    const [description, setDescription] = useState(todo.description);
    
    const EditDesc = async(e) => {
        e.preventDefault();
        try {
            const body = {description}; //description of useState()
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        // console.log(response);
        window.location="/";
        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <>
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}`}>
            <img src="assets/edit.png" alt="Edit icon" style={{width: "2rem"}}/>
            </button>
            
            <div className="modal fade" id={`id${todo.todo_id}`} tabIndex="-1" aria-labelledby="editTodoValueModel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Todo</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <input type="text" name="" id="" value={description} onChange={e => {
                        setDescription(e.target.value);
                    }}/>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-warning" onClick={e=> EditDesc(e)}>Save changes</button>
                    {/* If we make some changes in the description and click close button then we want it to remain as its previous value only */}
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => setDescription(todo.description)}>Close</button>
                  </div>
                </div>
              </div>
            </div>
         </>
    )
}

export default EditTodo;