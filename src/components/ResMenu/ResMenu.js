import { useParams } from "react-router-dom";
import OfferCard from "./OfferCard/OfferCard";
import Shimmer from "../Shimmer";
import "./ResMenu.css";
import useRestrauntMenu from "../../utils/useRestrauntMenu";
import MenuAccordion from "./Accordion/MenuAccordion";
import { useState } from "react";
import useOnlineStatus from "../../utils/useOnlineStatus";

const ResMenu = () => {
  const [showItem, setShowItem] = useState(0);
  const [showMenuItem, setShowMenuItem] = useState(true);
  const resId = useParams();
  const isOnline = useOnlineStatus();

  const menuItem = useRestrauntMenu(resId);

  if (menuItem.length === 0) {
    return <Shimmer />;
  }

  const { name, areaName, avgRating, cuisines, totalRatingsString } =
    menuItem[0]?.card?.card?.info;

  const offers = menuItem[1]?.card?.card?.gridElements?.infoWithStyle?.offers;

  const filterCardList =
    menuItem[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu-container">
      <div className="res-details-container">
        <div className="res-details">
          <h4>
            {name} Open:{isOnline ? "🟢" : "🔴"}
          </h4>
          <p>{cuisines.join(", ")}</p>
          <p>{areaName} 2.2 km</p>
        </div>
        <div className="res-rating">
          <p>{avgRating} stars</p>
          <span className="rating-line"></span>
          <p>{totalRatingsString}</p>
        </div>
      </div>
      <hr />
      <div className="offer-card-container">
        {offers.length < 5
          ? offers.map((offer) => {
              return <OfferCard key={offer.info.offerIds[0]} offer={offer} />;
            })
          : offers.slice(0, 4).map((offer) => {
              return <OfferCard key={offer.info.offerIds[0]} offer={offer} />;
            })}
      </div>
      <div className="menu-item-container">
        {filterCardList.map((m, index) => {
          const { title, itemCards } = m.card.card;
          return (
            <MenuAccordion
              key={title}
              name={title}
              itemCards={itemCards}
              showMenuItem={index === showItem ? showMenuItem : false}
              setShowMenuItem={() => setShowItem(false)}
              showAccordionItem={() => setShowItem(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ResMenu;
