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
  //hadnle handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("Kolom tidak boleh kosong bro");
      return;
    }
    const addedTodos = [
      ...todos,
      {
        title: value,
        count: 1,
      },
    ];
    setTodos(addedTodos);
    //to make input clear again when we after click Add button
    setValue("");
  };

  //hadnle handleAdditionalCount
  const handleAdditionalCount = (index) => {
    const newTodos = [...todos];
    newTodos[index].count += 1;
    setTodos(newTodos);
  };

  //hadnle handleSubtractCount
  const handleSubtractCount = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].count > 0) {
      //to make count 0 if it is 1
      newTodos[index].count -= 1;
      setTodos(newTodos);
    } else {
      //to remove if it is 0
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
  };

  // getTotalCount
  const getTotalCount = () => {
    const total = todos.reduce((a, b) => {
      return a + b.count;
    }, 0);
    return total;
  };

  return (
    <>
      <nav className="nav">
        <img src={shoppingLogo} className="logo" alt="Shopping logo" />
        <h1 className="nav-item">Daftar BelanjaKu</h1>
      </nav>
      <section className="container">
        <form className="form" onSubmit={handleSubmit}>
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
        <div className="info">
          <div className="infoTotal">Total List: {todos.length}</div>
          <div className="infoTotal">{`Total Count: ${getTotalCount()}`}</div>
          <div className="deleteAllButton" onClick={() => setTodos([])}>
            Delete All
          </div>
        </div>
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
                    <button
                      className="todoActionButton"
                      onClick={() => handleSubtractCount(index)}
                    >
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
