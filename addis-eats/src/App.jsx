import { useState, useEffect } from "react";
import Dish from "./components/Dish";
import Header from "./components/Header";

function App() {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadMenu() {
      try {
        const res = await fetch("/menu.json");
        if (!res.ok) throw new Error(`Couldn't load the Dishes.`);

        const data = await res.json();
        setDishes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadMenu();
  }, []);

  if (loading) return <p>Loading menu...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <Header />
      <div className="dish-grid">
        {dishes.map((dish) => (
          <Dish key={dish.id} {...dish} />
        ))}
      </div>
    </div>
  );
}

export default App;
