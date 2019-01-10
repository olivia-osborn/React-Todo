import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

//list of todo items: 
const todoData = [
  {
    task: "complete ToDo App",
    id: 1,
    completed: false,
  },
  {
    task: "clean the house",
    id: 2,
    completed: false,
  },
  {
    task: "make dinner",
    id: 3,
    completed: false,
  },
  {
    task: "clean up after dinner",
    id: 4,
    completed: false,
  }
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super()
    this.state = {
      data: todoData,
      task: "",
    };
  }

  handleChanges = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  addNewTask = e => {
    e.preventDefault();
    this.setState({data: [...this.state.data, {
      task: this.state.task,
      id: Date.now(),
      completed: false
    }],
    
    task: ""
    }, () => console.log(this.state.data));
  }

  toggleCompleted = (id) => {
    this.setState({
      data: this.state.data.map(singleTodo => {
        if (singleTodo.id !== id) {
          return singleTodo;
        } else {
          return {
            ...singleTodo,
            completed: !singleTodo.completed
          };
        }
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    console.log("it worked!")
    this.setState({
      data: this.state.data.filter(
        filteredItem => filteredItem.completed === false
      )
    })
  }

  render() {
    return (
      <div className="app">
        <TodoList toggleCompleted={this.toggleCompleted} todoItems={this.state.data}/>
        <TodoForm 
          addNewTask={this.addNewTask}
          handleChanges={this.handleChanges} 
          task={this.state.task}
          clearCompleted = {this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
