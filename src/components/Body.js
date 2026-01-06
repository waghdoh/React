import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useListofRestaurants from "../utils/useListofRestaurant";
import useOnOffLineStatus from "../utils/useOnOffLineStatus";

const Body = () => {

  const [Searchedtext, setSearchedtext] = useState("");

  const { ListOfRes, FilteredData } = useListofRestaurants();

  const onOfflineStatus = useOnOffLineStatus();
  if(onOfflineStatus === false) {
    return <div className="offline">You are offline</div>;
  }

  if (ListOfRes.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for restaurants and food"
          className="input-type"
          value={Searchedtext}
          onChange={(e) => {
            setSearchedtext(e.target.value);
          }}
        />
        <button className="search-btn"
          onClick={() => {
            const filteredData = ListOfRes.filter((res) =>
              res.card.card.info.name.toLowerCase().includes(Searchedtext.toLowerCase())
            );
            setFilteredData(filteredData);
          }}>Search</button>
      </div>

      <div className="filter-btn">
        <button
          className="search-btn"
          onClick={() => {
            const FilterData = (ListOfRes || []).filter((res) => res.card.card.info.avgRating > 4.2);
            setFilteredData(FilterData);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {FilteredData?.map((restaurant) => (
          <Link
            key={restaurant.card.card.info.id}
            to={"/restaurant/" + restaurant.card.card.info.id}
            className="res-card-link"
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
