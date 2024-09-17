import { restrauntList } from './config';
import RestrauntCard from './RestrauntCard';
import { useState, useEffect } from "react";
import Shimmer from './Shimmer';
import axios from 'axios';

function filterData(searchText, restraunts) {

   const filterData = restraunts.filter((restraunt) =>
      restraunt?.name?.toLowerCase()?.includes(searchText.toLowerCase())
   );

   return filterData;
}

const Body = () => {

   // const searchvar = useState();
   const [searchText, setsearchText] = useState('searchvar');
   const [searchClicked, setSearchClicked] = useState("");

   //created a react variable restraunts.
   const [allRestraunts, setAllRestraunts] = useState([]);
   const [filterRestraunts, setFilterRestraunts] = useState([]);

   //const [ResInfo, setResInfo] = useState();
   //const [itemCards, setitemCards] = useState();

   useEffect(() => {
      getRestraunts();
   }, []);

   async function getRestraunts() {
      try {
         const response = await axios.get("http://localhost:5000/api");
         console.log("response data", response.data);
         // Accessing data from response
         setAllRestraunts(response.data.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         setFilterRestraunts(response.data.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      } catch (error) {
         console.error("Failed to fetch restaurants:", error);
      }
   }


   if (!allRestraunts) return null; //means if allReastunuts is not there then return null;



   if (filterRestraunts?.length == 0) return <h1>No restraunt matched your filter {allRestraunts}.</h1>
   return filterRestraunts?.length == 0 ? (
      <Shimmer />
   ) :
      (
         <>
            <div className="searchContainer">
               <input
                  type="text"
                  className="search-input"
                  placeholder="Search restaurant..."
                  value={searchText}
                  onChange={(e) => {
                     setsearchText(e.target.value);
                  }}
               />

               <h1>{searchText}</h1>
               <h2>{searchClicked}</h2>

               <button className="search-button" onClick={() => {
                  //filterData
                  const data = filterData(searchText, allRestraunts);
                  //update the state means restraunts variable,(we update the data using local variable.)
                  setFilterRestraunts(data);

               }}
               >
                  Search
               </button>

            </div>

            <div className="restaurant-List">

               {/*{
                  //rendering all filterRestraunt here.
               }; */}

               {filterRestraunts?.map((restaurant, index) => (
                  <RestrauntCard
                     key={index}
                     name={restaurant.info.name}
                     cuisines={restaurant.info.cuisines}
                     cloudinaryImageId={restaurant.info.cloudinaryImageId}
                     avgRating={restaurant.info.avgRating}
                  />
               ))}
            </div>
         </>
      );

};

export default Body;