import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const Navigation = () => {

  const { cart } = useContext(CartContext);


  return (
    <>
        <nav className="container mx-auto flex items-center justify-between py-4">
          <Link to="/">
            <img
              style={{ height: 80 }}
              src="/images/pizzaLogo.png"
              alt="logo"
            />
          </Link>
          <ul className="flex space-x-6 mr-2 items-center">
            <li className="px-2 py-1 rounded-md hover:bg-red-300 transition">
              <Link to="/">Home</Link>
            </li>
            <li className="px-2 py-1 rounded-md hover:bg-red-300 transition">

              <Link to="/product">Product</Link>
              
            </li>
            <li>
              <Link to="/cart">
                <div className="flex bg-yellow-500 px-2 py-1 rounded-full hover:bg-yellow-600">
                  <span className="mr-2">{ cart ? cart.totalItems : '' }</span>
                  <i className="bi bi-cart2"></i>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      
    </>
  );
};

export default Navigation;
