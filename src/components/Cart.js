import { useSelector, useDispatch } from "react-redux";
import MenuItem from "./ResMenu/MenuItem/MenuItem";
import { removeItem, clearCart } from "../store/cartReducer";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartSelector = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  // console.log(cartSelector);
  if (cartSelector.length < 1) {
    return (
      <div className="text-center">
        <h3 className="font-bold">You Cart is Empty</h3>
        <h5 className="font-semibold">Please add some item</h5>
        <button className="px-4 py-2 bg-green-500 mt-4 text-white rounded-lg shadow-md">
          <Link to="/">Browse Restaurant</Link>
        </button>
      </div>
    );
  }
  return (
    <div className="w-6/12 m-auto bg-gray-200 p-2 mt-4 rounded-md">
      <button
        className="px-4 py-2 rounded-md bg-red-500 text-white"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
      {cartSelector.map((m, index) => {
        return (
          <MenuItem
            key={m.card.info.id}
            menu={m}
            isCartItem={true}
            removeMenuItem={() => dispatch(removeItem(index))}
          />
        );
      })}
    </div>
  );
};

export default Cart;
