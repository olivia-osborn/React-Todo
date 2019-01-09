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
        </form>
    )
}

export default TodoForm;