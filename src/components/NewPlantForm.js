import {useState, useEffect} from "react";

function NewPlantForm({ onAdd }) {

const [newPlant, setNewPlant] = useState({
  name: '',
  image: '',
  price: ''
})

// console.log(newPlant)



  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={e => {
        e.preventDefault();
        onAdd(newPlant);
      }}>
        <input onChange={(e)=> setNewPlant({ ...newPlant, name:e.target.value})} value={newPlant.name} type="text" name="name" placeholder="Plant name" />
        <input onChange={(e)=> setNewPlant({...newPlant, image:e.target.value})} value={newPlant.image} type="text" name="image" placeholder="Image URL" />
        <input onChange={(e)=> setNewPlant({...newPlant, price:e.target.value})} value={newPlant.price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
