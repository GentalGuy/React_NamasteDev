import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestuarantCard";
import resList from "../src/utils/mockData";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  const filterList = () => {
    let filterData = listOfRestaurant.filter((res) => res.rating > 4.5);
     setListOfRestaurant(filterData);
  };

  useEffect(() => {
    fetchData();
  },[])
  const fetchData = async() => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  }
  return (
    <div className="body">
      <div className="filter">
        <button onClick={() => filterList()} className="filter-btn">
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant,index) => {
          return <RestaurantCard key={index} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
