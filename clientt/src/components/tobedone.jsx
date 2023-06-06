import React from "react";

export default tobedone = (props) => {
    return (
        <>
            {todos.reverse().map(todo => (
            <tr key={todo.todo_id}>
                <ToDo todos={todos} todo={todo} doneToDos={doneToDos} setDoneArr={setDoneToDos}/>
                <td><EditTodo todo={todo} /></td>
                <td><button className="btn" onClick={() => DeleteTodo(todo.todo_id)}><img src="assets/delete.png" alt="Delete icon" style={{width: "2rem"}}/></button></td>
            </tr>
        ))}
        </>
    )
}
