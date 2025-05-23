import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestuarantCard";
import Shimmer from "./shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [search,setSearch] = useState("");
  const [filteredCopy,setFilteredCopy] = useState([])

  const filterList = () => {
    let filterData = listOfRestaurant.filter((res) => res.info.avgRating > 4.5);
    setListOfRestaurant(filterData);
    
  };

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredCopy(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const searchItems = () => {
    const filteredNames = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(search.toLowerCase()))
    setFilteredCopy(filteredNames)

  }

  return  listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button onClick={() => filterList()} className="filter-btn">
          Top Rated Restaurants
        </button>
        <div className="search">
          <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
          <button onClick={() =>{ 
            searchItems()
          }}>Search</button>
        </div>
      </div>
      <div className="res-container">
        {listOfRestaurant &&
          filteredCopy.map((restaurant, index) => {
            return <RestaurantCard key={index} resData={restaurant} />;
          })}
      </div>
    </div>
  );
};

export default Body;
