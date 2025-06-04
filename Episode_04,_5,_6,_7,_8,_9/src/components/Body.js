import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestuarantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useInternetCheck from "../utils/useInternetCheck";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCopy, setFilteredCopy] = useState([]);

  const filterList = () => {
    let filterData = listOfRestaurant.filter((res) => res.info.avgRating > 4.5);
    setListOfRestaurant(filterData);
  };

  useEffect(() => {
    fetchData(); 
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredCopy(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const searchItems = () => {
    const filteredNames = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCopy(filteredNames);
  };
  const checkInternet = useInternetCheck();

  if (checkInternet === false) {
    return (<h1 className="no-internet">Please, Check your internet connection</h1>)
  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body flex flex-col p-10 w-full  ">
      <div className="filter flex gap-25 mb-10">
        <button onClick={() => filterList()} className="filter-btn px-3 cursor-pointer py-2 bg-gray-500 text-white rounded">
          Top Rated Restaurants
        </button>
        <div className="search flex gap-5">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            className="bg-gray-100 w-90 p-1 rounded border-1 border-gray-400"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
          className="px-3 py-2 cursor-pointer bg-blue-600 rounded text-white"
            onClick={() => {
              searchItems();
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-container flex gap-20 flex-wrap ">
        {listOfRestaurant &&
          filteredCopy.map((restaurant) => {
            return (
              <Link
                className="card"
                key={restaurant.info.id}
                to={`/restaurants/${restaurant.info.id}`}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Body;
