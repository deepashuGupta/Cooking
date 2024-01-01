import ResCard, { isNewlyAdded } from "./ResCard";
import ShimmerCard from "./Shimmer";
import { useEffect, useState } from "react";
import { RES_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [inputText, setInputText] = useState("");
  const isOnline = useOnlineStatus();
  const NewResCard = isNewlyAdded(ResCard);

  useEffect(() => {
    //  it will run immediately after the render not before
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_URL);

    const jsonData = await data.json();
    const restaurantList = jsonData?.data.cards.filter(
      (c) =>
        c.card.card["@type"] ===
          "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget" &&
        c.card.card.id === "restaurant_grid_listing"
    );
    // console.log(jsonData);
    setListOfRestaurant(
      restaurantList[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (!isOnline) {
    return (
      <div>
        <h1>You Lost Your Internet. Please Check Your Internet</h1>
      </div>
    );
  }

  // why we need put this code here
  if (listOfRestaurant.length === 0) {
    return <ShimmerCard />;
  }
  return (
    <div className="relative w-[80%] m-auto">
      <div className="my-6 flex justify-between"></div>
      <div className="flex flex-wrap justify-between">
        {listOfRestaurant.map((resInfo) => {
          return (
            <Link key={resInfo.info.id} to={"/restaurant/" + resInfo.info.id}>
              {/* If restaurant is newly onboarded render the compoment with new lable */}
              {resInfo.info.isNewlyOnboarded ? (
                <NewResCard resData={resInfo} />
              ) : (
                <ResCard resData={resInfo} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
