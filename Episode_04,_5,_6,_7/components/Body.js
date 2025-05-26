import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestuarantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
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
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredCopy(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const searchItems = () => {
    const filteredNames = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(search.toLowerCase()))
    setFilteredCopy(filteredNames)

  }

  return listOfRestaurant.length === 0 ? (
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
          filteredCopy.map((restaurant) => {
            return <Link className="card" key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}><RestaurantCard  resData={restaurant} /></Link>
          })}
      </div>
    </div>
  );
};

export default Body;
