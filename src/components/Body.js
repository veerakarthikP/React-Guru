import RestaurantCard from "./RestaurantCard";
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.392022847840856&lng=78.34463884206352&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await res.json();
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setSearchResults(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  return (
    listOfRestaurants?.length === 0 ? <Shimmer/> :
    <div className="body-container">
      <div className="filter-container">
        <div className="search-container">
          <input type="string" value={searchValue} onChange={(e) => {setSearchValue(e.target.value)}}/>
          <button onClick={() => {
            setSearchResults(listOfRestaurants.filter((res) => res?.info?.name?.toLowerCase()?.includes(searchValue?.toLowerCase())));
          }}>Search</button>
        </div>
        <div>
          <button className="filter-button" onClick={() => {
              setListOfRestaurants(listOfRestaurants.filter(res => res?.info?.avgRating > 4))
          }}>Top Rated Restaurants</button>
        </div>
      </div>
      <div className="res-container">
        {searchResults.map((res) => (
          <RestaurantCard key={res?.info?.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
