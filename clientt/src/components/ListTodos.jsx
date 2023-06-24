import React, { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import DivBar from "./DivBar";
import ToDo from "./ToDo";
import All from "./All";
import './DeleteAll.css';

const ListTodos = () => {
    const [todos, setToDos] = useState([]);
    const [doneToDos, setDoneToDos] = useState([]);
    
    const getTodos = async() => {
        try {
            const res = await fetch("http://localhost:5000/todos");
            const data = await res.json(); //parse data
            
            // console.log(data);
            setToDos(data);
        } catch (err) {
            console.error(err.message);
        }
    }


    //Delete function to delete all
    const deleteTodos = async() => {
        try {
            const res = await fetch('http://localhost:5000/todos', {
            method: "DELETE"
        });
        setToDos([]);

        } catch (err) {
            console.error(err.message);
        }
    }
    
    useEffect(() => {
        getTodos();
    },[])

    return (
        <Fragment>
            <DivBar todos={todos} setToDos={setToDos} countAll={todos.length} countDone={doneToDos.length}/>
            
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Mark as done</th>
                  <th scope="col">Description</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                  <All todos={todos}/>    
              </tbody>
            </table>

            {/* DELETE ALL */}
            <img data-bs-toggle="modal" data-bs-target="#deleteAll" className="deleteAll" src="assets/deleteAll.png" /> 
            
            <div className="modal fade" id="deleteAll" tabIndex="-1" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="deleteAllLabel">Delete All Todos</h1>
                  </div>
                  <div className="modal-body">
                    <p>Are you sure you want to delete all todos?</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" onClick={deleteTodos} data-bs-dismiss="modal">Yes, Delete.</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
        </Fragment>
    )
}

export default ListTodos;