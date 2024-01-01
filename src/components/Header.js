import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  // const [login, setLogin] = useState(false);
  const { userName } = useContext(UserContext);
  const cartSelector = useSelector((store) => store.cart.items);
  // console.log(cartSelector);
  return (
    <div className="flex justify-between items-center bg-gray-100 shadow-md sticky top-0 z-50">
      <div className="logo-container">
        <div className="w-32">
          <img src={LOGO_URL} />
        </div>
      </div>
      <div className="nav-link-container">
        <ul className="flex">
          <li className="pr-4">
            <Link to="/">Home</Link>
          </li>
          <li className="pr-4">
            <Link to="/search">Search🔍</Link>
          </li>
          <li className="pr-4">
            <Link to="/about">About</Link>
          </li>
          <li className="pr-4">
            <Link to="/contact">Contact</Link>
          </li>
          {/* <li className="pr-4">
            <Link to="/insta_mart">Grocery Store</Link>
          </li> */}
          <li className="pr-8 relative">
            <Link to="/Cart">Cart</Link>
            <div
              data-testid="cartItems"
              className="absolute top-[-12px] right-4 w-6 h-6 bg-red-500
             border-4 border-white rounded-full flex justify-center items-center"
            >
              {cartSelector.length}
            </div>
          </li>
          {/* <button onClick={() => setLogin(!login)}>
            {login ? "Logout" : "Login"}
          </button> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
