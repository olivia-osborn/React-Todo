import React from "react";
import "./Todo.css";

function Todo(props) {
    return <div className={`singleTask ${props.item.completed ? "completed" : null}`} onClick={() => props.toggleCompleted(props.item.id)}>{props.item.task}</div>
}

export default Todo;