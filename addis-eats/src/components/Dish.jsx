function Dish({ name, description, price, image }) {
  return (
    <div className="dish-card">
      <img src={image} alt={name} />
      <div className="dish-info">
        <h3>{name}</h3>
        <p>{description}</p>

        <div className="div-footer">
          <span className="price">ETB {price}</span>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Dish;
