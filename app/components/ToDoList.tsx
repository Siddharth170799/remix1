import React, { useEffect, useState } from "react";
import "/app/styles/home.css";

const ToDoList = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [new1,setNew1]=useState(true)

  useEffect(() => {
    const getData = localStorage.getItem("key50");
    const getData2 = JSON.parse(getData);
    setData(getData2);
  }, [new1]);
  const addItems = () => {
    if (input !== "") {
      const obj = {
        items: input,
      };
      setData([...data, obj]);
      setInput("");

      let array = [];
      const getData = localStorage.getItem("key50");
      const getData2 = JSON.parse(getData);
      if (getData2) {
        array = [...getData2, obj];
      } else {
        array.push(obj);
      }
      localStorage.setItem("key50", JSON.stringify(array));
      setData(getData2);
    }
    setNew1(!new1)
  };

  const deleteItems = (index) => {
    const storedData = JSON.parse(localStorage.getItem("key50"));
    if (storedData) {
      storedData.splice(index, 1);
      localStorage.setItem("key50", JSON.stringify(storedData));
    }
    setData(storedData);
  };

  const moveTasksDown = (index) => {
    if (index < data.length - 1) {
      let updatedList = [...data];
      [updatedList[index], updatedList[index + 1]] = [
        updatedList[index + 1],
        updatedList[index],
      ];
      setData(updatedList);
    }
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      let updatedList = [...data];
      [updatedList[index], updatedList[index - 1]] = [
        updatedList[index - 1],
        updatedList[index],
      ];
      setData(updatedList);
    }
  };

  return (
    <div className="todo-app">
      <h1 style={{ textAlign: "center" }}>Todo App</h1>
      <div className="todo-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={addItems}>Add</button>
      </div>
      <ul className="todo-list">
      
        {data?.map((item, index) => {
          return (
            <li key={index}>
              {item.items} 
              <button onClick={() => deleteItems(index)}>Delete</button>
              <button onClick={() => moveTaskUp(index)}>MoveUp</button>
              <button onClick={() => moveTasksDown(index)}>Move Down</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;


// import React, { useState, useEffect } from "react";

// const ToDoList = () => {
//   const [input, setInput] = useState("");
//   const [todoItems, setTodoItems] = useState([]);

//   useEffect(() => {
//     const existingItems = JSON.parse(getCookie("todoList")) || [];
//     setTodoItems(existingItems);
//   }, []);

//   const addItemsToCookie = () => {
//     if (input !== "") {
//       const newItem = { text: input };
//       const existingItems = JSON.parse(getCookie("todoList")) || [];
//       const updatedItems = [...existingItems, newItem];
//       setCookie("todoList", JSON.stringify(updatedItems), 30); // Expires in 30 days
//       setTodoItems(updatedItems);
//       setInput("");
//     }
//   };

//   const getCookie = (name) => {
//     const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
//     return cookieValue ? cookieValue.pop() : null;
//   };

 

//   return (
//     <div>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Add a new todo"
//       />
//       <button onClick={addItemsToCookie}>Add</button>

//       <div>
//         <h2>Todo List</h2>
//         <ul>
//           {todoItems.map((item, index) => (
//             <li key={index}>{item.text}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ToDoList;



