import React, { useState } from "react";

function ToyForm({ setNewToy }) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const handleSub = (e) => {
    e.preventDefault();
    let newObj = {
      name: name,
      image: img,
      likes: 0,
    };
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newObj),
    })
      .then((resp) => resp.json())
      .then((data) => setNewToy(data));
    setName("");
    setImg("");
  };
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSub}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={img}
          onChange={(e) => {
            setImg(e.target.value);
          }}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
