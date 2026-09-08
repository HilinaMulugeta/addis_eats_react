function Dish({ name, price }) {
  return (
    <div>
      <h3>
        {name} - ${price.toFixed(2)}
      </h3>
    </div>
  );
}

export default Dish;
