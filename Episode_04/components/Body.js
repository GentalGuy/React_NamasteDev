import React, { useState } from "react";
import RestaurantCard from "./RestuarantCard";
import resList from "../src/utils/mockData";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  const filterList = () => {
    let filterData = listOfRestaurant.filter((res) => res.rating > 4.5);
     setListOfRestaurant(filterData);
  };

  return (
    <div className="body">
      <div className="filter">
        <button onClick={() => filterList()} className="filter-btn">
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
