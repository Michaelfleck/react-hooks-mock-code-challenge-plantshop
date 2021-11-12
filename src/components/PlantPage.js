import { useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage( { newPlant } ) {

  const [plants, setPlants] = useState([])

  useEffect( () => {
    fetch(`http://localhost:6001/plants`)
      .then(resp => resp.json())
      .then(data => setPlants(data));
  },[])

  return (
    <main>
      <NewPlantForm onAdd={ (newPlant) => {
        fetch(
          `http://localhost:6001/plants`,
          {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...newPlant, price:parseFloat(newPlant.price) })
          }
        )
          .then((response) => response.json())
          .then((updatedPlant) => setPlants([...plants, updatedPlant]));
      } }/>
      <Search />
      <PlantList plants={plants} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
