import { useState, useEffect } from "react";


const useListofRestaurants = () => {
  const [ListOfRes, setListOfRes] = useState([]);
  const [FilteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://api.allorigins.win/raw?url=" + encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"));
      if (!data.ok) throw new Error(data.statusText);
      const json = await data.json();
      const restaurants = json?.data?.cards?.filter(c => c?.card?.card?.info) || [];
      setListOfRes(restaurants);
      setFilteredData(restaurants);
    } catch (error) {
      console.warn("Failed to fetch data, using mock data:", error);
      // Fallback mock data
      const mockRestaurants = [
        {
          card: {
            card: {
              info: {
                id: "121603",
                name: "Kannur Food Point",
                cloudinaryImageId: "bmwn4n4bn6n1tc38exwl",
                cuisines: ["Kerala", "Chinese"],
                avgRating: 3.9,
                costForTwo: "30000",
                deliveryTime: 24,
              }
            }
          }
        },
        {
          card: {
            card: {
              info: {
                id: "229",
                name: "Meghana Foods",
                cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
                cuisines: ["Biryani", "Andhra"],
                avgRating: 4.4,
                costForTwo: "50000",
                deliveryTime: 35,
              }
            }
          }
        },
        {
          card: {
            card: {
              info: {
                id: "428",
                name: "Biryani Pot",
                cloudinaryImageId: "mdipoyzfzsa7n7igskht",
                cuisines: ["North Indian", "Biryani"],
                avgRating: 3.8,
                costForTwo: "20000",
                deliveryTime: 25,
              }
            }
          }
        },
      ];
      setListOfRes(mockRestaurants);
      setFilteredData(mockRestaurants);
    }
  }
  return { ListOfRes, FilteredData };
}

export default useListofRestaurants;