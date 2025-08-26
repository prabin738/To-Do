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

    // alert(todoname);

    event.preventDefault();
  };

  //after function
  let list = todoList.map((value, index) => {
    return (
      <Todolistitems
        value={value}
        key={index}
        indexNumber={index}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    );
  });

  return (
    <div className="App">
      <h1>ToDo List - by Prabin Singh Thakuri</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="todoname" />
        <button>Save</button>
      </form>
      <div className="outer-div">
        <ul>{list}</ul>
      </div>
    </div>
  );
};

function Todolistitems({ value, indexNumber, todoList, setTodoList }) {
  let [status, setStatus] = useState(false);

  let deleteRow = () => {
    let finalData = todoList.filter((v, i) => i != indexNumber);
    setTodoList(finalData);
  };

  let checkStatus = () => {
    setStatus(!status);
  };

  return (
    <li className={status ? "completetodo" : ""} onClick={checkStatus}>
      {indexNumber + 1}. {value} <span onClick={deleteRow}>&times;</span>
    </li>
  );
}

export default App;
