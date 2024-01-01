import { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";

const MenuAccordion = (props) => {
  const { name, itemCards, showAccordionItem, showMenuItem, setShowMenuItem } =
    props;

  const handleShow = () => {
    showAccordionItem();
  };
  return (
    <div className="bg-gray-200 p-4 my-4 shadow-md">
      <div
        className="flex justify-between font-bold cursor-pointer"
        onClick={showMenuItem ? setShowMenuItem : handleShow}
      >
        <h5>
          {name}({itemCards.length})
        </h5>
        <span>🔽</span>
      </div>
      {itemCards.map((m) => {
        return showMenuItem && <MenuItem key={m.card.info.id} menu={m} />;
      })}
    </div>
  );
};

export default MenuAccordion;
