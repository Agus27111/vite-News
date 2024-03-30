import { useState } from "react";

import shoppingLogo from "./assets/shopping-icon.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

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
            onChange={(e) => {setValue(e.target.value)}}
          />
          <button className="addButton" type="submit">
            Add
          </button>
        </form>
      </section>
    </>
  );
}

export default App;
