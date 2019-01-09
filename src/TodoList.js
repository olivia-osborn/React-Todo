import React from "react";
import TodoItem from "./TodoItem"

function TodoList(props) {
    return (
        <div>
            {props.todoItems.map((item) => {
                return <TodoItem item ={item} />
            })}
        </div>
    )
}

export default TodoList;