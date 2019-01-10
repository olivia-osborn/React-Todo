import React from "react";

function Todo(props) {
    return <div onClick={props.toggleCompleted}>{props.item.task}</div>
}


export default Todo;