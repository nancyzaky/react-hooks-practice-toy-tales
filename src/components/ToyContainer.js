import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, deleteToy }) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => {
        return (
          <ToyCard key={toy.id} {...toy} deleteToy={deleteToy} toys={toys} />
        );
      })}
    </div>
  );
}

export default ToyContainer;
