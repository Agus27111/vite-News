/* eslint-disable react/jsx-no-undef */
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(1); // Set initial count to 1
  const [value, setValue] = useState(""); // Set initial value to an empty string
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Buy milk",
      count: 1,
    },
    {
      id: 2,
      name: "Buy eggs",
      count: 1,
    },
    {
      id: 3,
      name: "Buy bread",
      count: 1,
    },
  ]);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) { // Ensure count doesn't go below 1
      setCount(count - 1);
    }
  };

  const handleSubmit = (e) => { // Fix function name to lowercase
    e.preventDefault();
    if (value.trim() !== "") { // Check if the value is not empty or whitespace only
      const newTodo = {
        id: todos.length + 1, // Generate unique ID
        name: value,
        count: 1
      };
      setTodos([...todos, newTodo]); // Add newTodo to todos array
      setValue(""); // Clear input after submission
    }
  };

  return (
    <>
      <div className="card">
        <Navbar />
        <div className="section">
          <div className="form">
            <input
              onChange={(e) => setValue(e.target.value)} // Fix onChange handler
              value={value}
              type="text"
            />
            <button onClick={handleSubmit}>ADD</button> {/* Fix onClick handler */}
          </div>
        </div>
        {/* todos container */}
        {todos.length > 0 ? (
          <div className="todos">
            {todos.map((todo) => { // Remove index parameter
              return (
                <div className="todo" key={todo.id}> {/* Use todo.id as the key */}
                  <div className="name">{todo.name}</div>
                  <div className="count">{todo.count}</div>
                  <div className="button">
                    <button onClick={increaseCount}>+</button>
                    <p>{todo.count}</p> {/* Display todo.count */}
                    <button onClick={decreaseCount}>-</button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>Kosong nih cuy . . .</div>
        )}
      </div>
    </>
  );
}

export default App;
