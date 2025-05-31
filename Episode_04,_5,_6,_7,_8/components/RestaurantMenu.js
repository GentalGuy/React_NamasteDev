import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router"
import { MENU_API } from "../src/utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
const {resId} = useParams();

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + resId +"&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsonData = await data.json();
    setResInfo(jsonData.data);
  };
  useEffect(() => {
    fetchMenu();
  }, []);

if( resInfo === null){
  return <Shimmer />
}
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
    const cardData = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards || resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards;
const itemCards = cardData
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2> menu</h2>
      <ul>
        {!itemCards ? "loading...." : itemCards.map((item,index)=>(
          <li key={index}>{item.card.info.name} - {item.card.info.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
