import React from "react";

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
            <button>Clear Completed</button>
        </form>
    )
}

export default TodoForm;