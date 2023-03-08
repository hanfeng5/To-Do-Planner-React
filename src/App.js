// import './App.css';
import React, { useState } from "react"
import "./index.css";
import Todo from "./components/Todo"
import FilterButton from "./components/FilterButton";
import Form from "./components/Form"
import { nanoid } from "nanoid"



function App(props) {

  const [tasks, setTask] = useState(props.tasks);


  function addTask(name) {
    const newTask = {id: `todo-${nanoid()}`, name, completed:false}
    setTask([...tasks, newTask]);
  }
console.log(tasks)

  const taskList = tasks.map((task) => (
  <Todo 
    id={task.id} 
    name={task.name} 
    completed={task.completed} 
    key={task.id} />
));
return (
<div className="todoapp stack-large">
  <h1>To-Do-Planner!</h1>
  <Form addTask={addTask}></Form>
  <div className="filters btn-group stack-exception">
    <FilterButton></FilterButton>
    <FilterButton></FilterButton>
    <FilterButton></FilterButton>
  </div>
  <h2 id="list-heading">3 tasks remaining</h2>
  <ul
    role="list"
    className="todo-list stack-large stack-exception"
    aria-labelledby="list-heading">
      {taskList}
  </ul>
</div>
)
}

export default App;
