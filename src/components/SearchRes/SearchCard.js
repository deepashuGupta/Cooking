import { MENU_IMG_URL } from "../../utils/constant";
import { Link } from "react-router-dom";

const SearchCard = (props) => {
  const { text, tagToDisplay, metadata, cloudinaryId } = props.card;
  let met = metadata.split('\\"');
  let resId = JSON.parse(met[0])?.data?.primaryRestaurantId;
  return (
    <Link to={"/restaurant/" + resId}>
      <div className="flex bg-gray-300 my-4 rounded-md p-2 items-center cursor-pointer">
        <img
          className="w-16 rounded-lg mr-4"
          src={MENU_IMG_URL + cloudinaryId}
        />
        <div>
          <h5>{text}</h5>
          <p>{tagToDisplay}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchCard;
