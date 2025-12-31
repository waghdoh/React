import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockdata";



// let ListOfRes = [
//   {
//     card: {
//       card: {
//         info: {
//           id: "1146492",
//           name: "Biryani Talkiez - Kebabs & Asian Meals",
//           cloudinaryImageId:
//             "FOOD_CATALOG/IMAGES/CMS/2025/3/11/67652a6c-f5d7-4c63-9e63-3430700e52e7_8f24c1ee-6b54-4383-8d21-965124755d28.jpg_compressed",
//           locality: "HSR",
//           areaName: "HSR",
//           costForTwo: "₹400 for two",
//           cuisines: ["Biryani", "Kebabs", "rolls", "Chinese", "Desserts"],
//           avgRating: 4.2,
//         },
//       },
//     },
//   },
//   {
//     card: {
//       card: {
//         info: {
//           id: "1146493",
//           name: "meghana",
//           cloudinaryImageId:
//             "FOOD_CATALOG/IMAGES/CMS/2025/3/11/67652a6c-f5d7-4c63-9e63-3430700e52e7_8f24c1ee-6b54-4383-8d21-965124755d28.jpg_compressed",
//           locality: "HSR",
//           areaName: "HSR",
//           costForTwo: "₹400 for two",
//           cuisines: ["Biryani", "Kebabs", "rolls", "Chinese", "Desserts"],
//           avgRating: 4.2,
//         },
//       },
//     },
//   },
// ];
const Body = () => {
    const [ListOfRes, setListOfRes] = useState(resList);
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for restaurants and food"
          className="input-type"
        />
        <button className="search-btn">Search</button>
      </div>
      {/* filter for top rated res */}
      <div className="filter-btn ">
        <button
          className="search-btn"
        //   onClick={() => {
        //     console.log("Button");
        //   }}
        // onClick={() => {
        //     ListOfRes = ListOfRes.filter((res) => res.card.card.info.avgRating > 4);
        //     console.log(ListOfRes);
        // }}
        onClick={() => {
            // ListOfRes = ListOfRes.filter((res) => res.card.card.info.avgRating > 4);
            // console.log(ListOfRes);
         const FilterData = resList.filter((res) => res.card.card.info.avgRating > 4.2);
         console.log(FilterData);
         setListOfRes(FilterData);
        }}
        
        
        >
          Top Rated Restaurant
        </button>
        
      </div>
      {/* o,1 karke bahut zyada hojate but nstead we could loop it */}
      <div className="res-container">
        {/* <RestaurantCard  resData ={resList[0]} />
                <RestaurantCard  resData ={resList[1]} /> */}
        {/* "ill use map function to loop it" */}
        {/* {not using key is (not acceptable) <<< use index as key <<<<<<<<<<<<< use unique key always} */}
        {ListOfRes.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
//Yes ✅, you CAN have both named and default exports/imports together in React (and ES Modules)
