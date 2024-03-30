import { useState } from "react";
import classnames from "classnames";

import shoppingLogo from "./assets/shopping-icon.svg";
import plusIcon from "./assets/plus-icon.svg";
import minusIcon from "./assets/minus-icon.svg";

import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { title: "Masako", count: 1 },
    { title: "Susu SKM", count: 1 },
    { title: "Mie rebus", count: 1 },
  ]);

  //hadnle handleAdditionalCount
  const handleAdditionalCount = (index) => {
    const newTodos = [...todos];
    newTodos[index].count += 1;
    setTodos(newTodos);
  };

  return (
    <>
      <nav className="nav">
        <img src={shoppingLogo} className="logo" alt="Shopping logo" />
        <h1 className="nav-item">Daftar BelanjaKu</h1>
      </nav>
      <section className="container">
        <form className="form">
          <input
            type="text"
            placeholder="list"
            className="input"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button className="addButton" type="submit">
            Add
          </button>
        </form>
        {todos.length > 0 ? (
          <div className="todos">
            {todos.map((todo, index, arr) => {
              return (
                <div
                  className={`todo ${
                    !(arr.length === index + 1) && "todoDivider"
                  }`}
                  key={index}
                >
                  {todo.title}
                  <div className="todoIconWrapper">
                    <div className="todoCount">{todo.count}</div>

                    <button
                      onClick={() => handleAdditionalCount(index)}
                      className="todoActionButton"
                    >
                      <img src={plusIcon} alt="plus icon" />
                    </button>
                    <button className="todoActionButton">
                      <img src={minusIcon} alt="minus icon" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="empty">
            {" "}
            <h1>this is empty</h1>{" "}
          </div>
        )}
      </section>
    </>
  );
}

export default App;
