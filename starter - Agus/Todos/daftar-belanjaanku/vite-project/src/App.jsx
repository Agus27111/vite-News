import { useState } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import SearchInput from "./components/SearchInput";
import Info from "./components/Info";
import Todos from "./components/Todos";
import Empty from "./components/Empty";

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
      <Navbar />
      <Container>
        <SearchInput
          value={value}
          onSubmit={handleSubmit}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Info
          todosLength={todos.length}
          getTotalCount={getTotalCount()}
          onClick={() => setTodos([])}
        />
        {todos.length > 0 ? (
          <Todos
            todos={todos}
            handleAdditionalCount={(index) => handleAdditionalCount(index)}
            handleSubtractCount={(index) => handleSubtractCount(index)}
          />
        ) : (
          <Empty />
        )}
      </Container>
    </>
  );
}

export default App;
