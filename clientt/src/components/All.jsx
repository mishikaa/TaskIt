import React,{Fragment} from 'react'
import EditTodo from "./EditTodo";
import Done from './Done';
import ToDo from './ToDo';

export default function All({todos, setToDos, doneToDos, setDoneToDos}) {
    //Delete function to delete a particular todo
    const DeleteTodo = async(id) => {
        try {
            const res = await fetch(`http://localhost:5000/todos/${id}`, {
            method: "DELETE"
        });

        setToDos(todos.filter(todo => todo.todo_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

  return (
    <Fragment>
        <span>{todos && todos.length === 0 ? 'No todo found.' : ''}</span>
        {todos.reverse().map(todo => (
            <tr key={todo.todo_id}>
                <ToDo todos={todos} todo={todo} doneToDos={doneToDos} setDoneArr={setDoneToDos}/>
                <td><EditTodo todo={todo} /></td>
                <td><button className="btn" onClick={() => DeleteTodo(todo.todo_id)}><img src="assets/delete.png" alt="Delete icon" style={{width: "2rem"}}/></button></td>
            </tr>
        ))}    
    </Fragment>
  )
}
