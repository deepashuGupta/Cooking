import { MENU_IMG_URL } from "../../../utils/constant";
import "./MenuItem.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../store/cartReducer";

const MenuItem = (props) => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(props.menu));
  };

  if (!props.menu) {
    return <h5>Loading...</h5>;
  }

  const { name, price, imageId, description, defaultPrice } =
    props.menu.card.info;

  return (
    <div
      data-testid="menuItems"
      className="item-container border-b-2 border-gray-300"
    >
      <div className="item-details">
        <div className="item-description w-9/12">
          <h5>{name}</h5>
          <p>₹{price ? price / 100 : defaultPrice / 100}</p>
          <p>{description}</p>
        </div>
        <div className="w-[100px] relative">
          <img
            className="w-24 rounded-md"
            src={MENU_IMG_URL + imageId}
            alt="item-img"
          />
          <button
            className="absolute bg-black text-white px-4 rounded-md bottom-[-8px] 
          right-[12px]"
            onClick={props.isCartItem ? props.removeMenuItem : handleAddItem}
          >
            {props.isCartItem ? "Delete" : "Add +"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
