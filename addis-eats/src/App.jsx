import Dish from "./component/Dish";
import Header from "./component/Header";
function App() {
  return (
    <div>
      <Header />
      <h1>Addis Eats</h1>
      <p>Order great food across Addis.</p>

      <Dish name="Doro-wot" price={580} />
      <Dish name="Shiro" price={300} />
    </div>
  );
}

export default App;
