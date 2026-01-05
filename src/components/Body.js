import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [ListOfRes, setListOfRes] = useState([]);
  const [FilteredData, setFilteredData] = useState([]);
  const [Searchedtext, setSearchedtext] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
    const json = await data.json();
    const restaurants = json?.data?.cards?.filter(c => c?.card?.card?.info) || [];
    setListOfRes(restaurants);
    setFilteredData(restaurants);
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
