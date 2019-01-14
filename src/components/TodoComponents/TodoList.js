// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";
import "./Todo.css";


function TodoList(props) {
    return (
        <div className="list">
            {props.todoItems.map((item) => {
                return <Todo toggleCompleted={props.toggleCompleted} key={item.id} item={item}/>
            })}
        </div>
    )
}

export default TodoList;