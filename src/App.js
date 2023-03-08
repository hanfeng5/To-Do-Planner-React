// import './App.css';
import React from "react"
import "./index.css";
import Todo from "./components/Todo"
import FilterButton from "./components/FilterButton";
import Form from "./components/Form"

function addTask(message) {
  alert(message)
}


function App(props) {
console.log(props.tasks)
const taskList = props.tasks.map((task) => (
  <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />
));
return (
<div className="todoapp stack-large">
  <h1>To-Do-Planner!</h1>
  <Form addTask={addTask}></Form>
  {/* <form>
    <h2 className="label-wrapper">
      <label htmlFor="new-todo-input" className="label__lg">
        What is next?
      </label>
    </h2>
    <input
      type="text"
      id="new-todo-input"
      className="input input__lg"
      name="text"
      autoComplete="on"
    />
    <button type="submit" className="btn btn__primary btn__lg">
      Add
    </button>
  </form> */}
  <div className="filters btn-group stack-exception">
    <FilterButton></FilterButton>
    <FilterButton></FilterButton>
    <FilterButton></FilterButton>
    {/* <button type="button" className="btn toggle-btn" aria-pressed="true">
      <span className="visually-hidden">Show </span>
      <span>All</span>
      <span className="visually-hidden"> tasks</span>
    </button>
    <button type="button" className="btn toggle-btn" aria-pressed="false">
      <span className="visually-hidden">Show </span>
      <span>Active</span>
      <span className="visually-hidden"> tasks</span>
    </button>
    <button type="button" className="btn toggle-btn" aria-pressed="false">
      <span className="visually-hidden">Show </span>
      <span>Completed</span>
      <span className="visually-hidden"> tasks</span>
    </button> */}
  </div>
  <h2 id="list-heading">3 tasks remaining</h2>
  <ul
    role="list"
    className="todo-list stack-large stack-exception"
    aria-labelledby="list-heading">
      {taskList}
      {/* <Todo name = "Eat" completed = {true}></Todo>
      <Todo name = "Sleep" completed = {false}></Todo>
      <Todo name = "Do other stuff" completed = {false}></Todo> */}
    {/* <li className="todo stack-small">
      <div className="c-cb">
        <input id="todo-0" type="checkbox" defaultChecked={true} />
        <label className="todo-label" htmlFor="todo-0">
          Eat
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">Eat</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">Eat</span>
        </button>
      </div>
    </li>
    <li className="todo stack-small">
      <div className="c-cb">
        <input id="todo-1" type="checkbox" />
        <label className="todo-label" htmlFor="todo-1">
          Sleep
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">Sleep</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">Sleep</span>
        </button>
      </div>
    </li>
    <li className="todo stack-small">
      <div className="c-cb">
        <input id="todo-2" type="checkbox" />
        <label className="todo-label" htmlFor="todo-2">
          Repeat
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">Repeat</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">Repeat</span>
        </button>
      </div>
    </li> */}
  </ul>
</div>
)
}

export default App;
