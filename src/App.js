import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartItemShown, setCartItemShown] = useState(false);

  const showCartHandler = () => {
    setCartItemShown(true);
  };

  const hideCartHandler = () => {
    setCartItemShown(false);
  };

  return (
    <CartProvider>
      {cartItemShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
