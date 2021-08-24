import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  const fetchUrl = () => {
    fetch("http://localhost:3001/toys")
      .then((resp) => resp.json())
      .then((data) => setToys(data));
  };
  const setNewToy = (item) => {
    setToys([...toys, item]);
  };
  const deleteToy = (key) => {
    const newArr = toys.filter((toy) => {
      return toy.id !== key;
    });
    setToys(newArr);
  };
  useEffect(() => {
    fetchUrl();
  }, []);

  return (
    <>
      <Header />
      {showForm ? <ToyForm setNewToy={setNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} deleteToy={deleteToy} />
    </>
  );
}

export default App;
