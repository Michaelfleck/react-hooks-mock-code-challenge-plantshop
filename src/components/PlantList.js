import React from "react";
import PlantCard from "./PlantCard";

function PlantList( {plants, setPlants} ) {
  return (
    <ul className="cards">
      {plants.map(plant => 
      <PlantCard
        key={plant.id}
        id={plant.id}
        name={plant.name}
        image={plant.image}
        price={plant.price}
        plants={plants}
        setPlants={setPlants}
      />)}
    </ul>
  );
}

export default PlantList;
