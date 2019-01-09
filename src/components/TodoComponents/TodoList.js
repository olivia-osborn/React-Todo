// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";


function TodoList(props) {
    return (
        <div>
            {props.todoItems.map((item) => {
                return <div key={item.id}>{item.task}</div>
            })}
        </div>
    )
}

export default TodoList;