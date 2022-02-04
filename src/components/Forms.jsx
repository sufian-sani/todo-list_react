import React from "react";
import { useState } from "react";

const Forms = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);

  const changedTodoTitle = (val) => {
    setTodoTitle(val);
  };

  const addTodo = (title) => {
    if (!title) {
      alert("Please provide a valid todo title");
    } else {
      const newTodo = {
        id: Date.now(),
        title: title,
      };
      setTodoList([newTodo, ...todoList]);
    }
  };

  return (
    <div className="Forms">
      <h2>Forms:</h2>

      <form action="">
        <input
          type="text"
          name="todo"
          placeholder=""
          value={todoTitle}
          onChange={(e) => changedTodoTitle(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            addTodo(todoTitle);
            setTodoTitle("");
          }}
        >
          Add Todo
        </button>
      </form>
      <ul>
        {todoList.map((todo) => (
          <li>
            <span>{todo.title}</span>
            <button>Edit</button>
            <button
              onClick={() => {
                const newTodoList = todoList.filter(
                  (item) => item.id !== todo.id
                );
                setTodoList(newTodoList);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forms;
