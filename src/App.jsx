import Navbar from "./Component/Navbar/Navbar";
import ItemList from "./Component/ItemsList/ItemList";
import CustomItemContext from "./ContextAPI/itemContext";
import CartModel from "./Component/CartModel/CartModel";

function App() {

  return (
    <>
      <div className="app">
        <h1 className="text-3xl font-bold flex justify-center mt-5">
          SHOPPING CART
        </h1>
        
        <CustomItemContext>
          <Navbar/>
          <ItemList/>
        </CustomItemContext>
      </div>
    </>
  )
}

export default App;
