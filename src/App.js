import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartContext } from "./CartContext";
import Navigation from "./components/Navigation";
// import About from "./pages/About";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import SinglePage from "./pages/SinglePage";
import { getCart, storeCart } from "./helpers"; 

const App = () => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    getCart().then(cart => {
      setCart(JSON.parse(cart));

    })
  }, []);

  useEffect(() => {
    storeCart(JSON.stringify(cart));
  }, [cart]);

  //fetch cart from local host

  return (
    <>
      <Router>
          <CartContext.Provider value={{ cart, setCart }}>
            <Navigation />
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                {/* <Route path="about" element={<About/>}/> */}
                <Route path="product" element={<ProductsPage />} />
                <Route path="cart" element={<Cart />} />
                <Route path="products/:_id" element={<SinglePage />} />
              </Route>
            </Routes>
          </CartContext.Provider>
      </Router>
    </>
  );
};

export default App;
