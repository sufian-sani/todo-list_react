import React from "react";
import { useState } from "react";

const TodoItems = (propos) => {
  console.log(propos);
  //   const [todoList, setTodoList] = useState([]);

  //   const addTodo = (title) => {
  //     if (!title) {
  //       alert("Please provide a valid todo title");
  //     } else {
  //       const newTodo = {
  //         id: Date.now(),
  //         title: title,
  //       };
  //       setTodoList([newTodo, ...todoList]);
  //     }
  //   };

  //   return (
  //     <div className="TodoItems">
  //       <ul>
  //         {todoList.map((todo) => (
  //           <li>
  //             <span>{todo.title}</span>
  //             <button>Edit</button>
  //             <button
  //               onClick={() => {
  //                 const newTodoList = todoList.filter(
  //                   (item) => item.id !== todo.id
  //                 );
  //                 setTodoList(newTodoList);
  //               }}
  //             >
  //               Delete
  //             </button>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
};

export default TodoItems;
