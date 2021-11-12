import {useState} from "react";

function PlantCard({image, name, price, plants, setPlants, id}) {

  const[inStock, setInStock] = useState(true)
  const[newPrice, setNewPrice] = useState('')

  function handleInStock () {
    setInStock(!inStock)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'DELETE',
    })
    .then(() => setPlants([...plants.filter((plant) => plant.id !== id)]))
  }

  function handleUpdate() {
    console.log(`http://localhost:6001/plants/${id}`)
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'PUT',
      headers: {"content-type": "application/json"},
      body: JSON.stringify({image, name, price : parseFloat(newPrice)})
    })
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleInStock} className="primary">In Stock</button>
      ) : (
        <button onClick={handleInStock}>Out of Stock</button>
      )}
      <button onClick={handleDelete} >Delete Plant</button>
      <input onChange={(e) => setNewPrice(e.target.value)} value={newPrice} type="number" name="name" placeholder="New Price" step="0.01" />
      <button onClick={handleUpdate}>Set Price</button>
      
    </li>
  );
}

export default PlantCard;
