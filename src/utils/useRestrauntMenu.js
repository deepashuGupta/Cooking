import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";

const useRestrauntMenu = (resId) => {
  const [menuItem, setMenuItem] = useState([]);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId.id);
    const json = await data.json();
    console.log(json);
    setMenuItem(json.data.cards);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return menuItem;
};

export default useRestrauntMenu;
