import React, { useState } from "react";

function ToyCard({ name, image, likes, id, deleteToy }) {
  const [liked, setLiked] = useState(likes);
  const handleDelete = (key) => {
    fetch(`http://localhost:3001/toys/${key}`, {
      method: "DELETE",
    });
    deleteToy(key);
  };
  const handleLikes = (key) => {
    setLiked((liked) => {
      return liked + 1;
    });
    fetch(`http://localhost:3001/toys/${key}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: liked + 1 }),
    });
  };
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{liked} Likes </p>
      <button
        className="like-btn"
        onClick={() => {
          handleLikes(id);
        }}
      >
        Like {"<3"}
      </button>
      <button
        className="del-btn"
        onClick={() => {
          console.log(id);
          handleDelete(id);
        }}
      >
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
