import React, { useState } from "react";
import "./index.css";

const App = () => {
  //usestate array to store our todo data
  let [todoList, setTodoList] = useState([]);
  let saveToDoList = (event) => {
    let todoname = event.target.todoname.value;
    if (!todoList.includes(todoname)) {
      let finalToDolist = [...todoList, todoname];
      setTodoList(finalToDolist);
    } else {
      alert("To Do Name Already Exists");
    }

    alert(todoname);

    event.preventDefault();
  };
  return (
    <div className="App">
      <h1>ToDo List - by Prabin Singh Thakuri</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="todoname" />
        <button>Save</button>
      </form>
      <div className="outer-div">
        <ul>
          <li>
            HTML <span>&times;</span>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
