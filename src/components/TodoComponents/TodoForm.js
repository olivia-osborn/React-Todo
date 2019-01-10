import React from "react";
import "./Todo.css";

function TodoForm(props) {

    return (
        <form>
            <input
                value={props.task} 
                type="text" 
                name="task"
                placeholder="Add new task" 
                onChange={props.handleChanges}
            />

            <button 
                onClick={props.addNewTask}
            >
                Add Todo
            </button>

            <button
                onClick={props.clearCompleted}
            >
                Clear Completed
            </button>
        </form>
    )
}

export default TodoForm;