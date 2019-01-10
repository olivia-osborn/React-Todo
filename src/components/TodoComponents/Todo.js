import React from "react";

function Todo(props) {
    return <div className={props.item.completed ? "completed" : null}onClick={() => props.toggleCompleted(props.item.id)}>{props.item.task}</div>
}


export default Todo;