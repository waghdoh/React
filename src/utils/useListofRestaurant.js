import { useState, useEffect } from "react";


const useListofRestaurants = () => {
  const [ListOfRes, setListOfRes] = useState([]);
  const [FilteredData, setFilteredData] = useState([]);

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
  return { ListOfRes, FilteredData };
}

export default useListofRestaurants;