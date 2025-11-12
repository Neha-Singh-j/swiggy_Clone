// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// const RestaurantDetails = () => {
  
//   const { id } = useParams();
//   const [restData, setRestData] = useState(null);

//   useEffect(() => {
//     fetchRestaurantData();
//   }, []);

//   async function fetchRestaurantData() {
//     try {
//       const API = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.18230&lng=78.02520&restaurantId=${id}`;
//       const resp = await fetch(API);
//       const json = await resp.json();
//       console.log(json, "menu-data");
//       setRestData(json.data);
//     } catch (err) {
//       console.log("Error:", err);
//     }
//   }
//   const info = restData?.cards[2]?.card?.card?.info; 
//   return (
//         <div className="w-8/12 m-auto mt-10">

//     <div className="flex">
//         <img 
//         className="w-80 h-56 rounded-2xl object-cover"
//         src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info?.cloudinaryImageId}`} 
//         alt={info?.name}
//         />

//         <div className="ml-6">
//         <h1 className="font v-bold text-3xl">{info?.name}</h1>

//         <span className="font-bold">
//             {info?.avgRating}
//         </span>

//         <span className="font-bold mx-4">
//             {info?.sla?.slaString}
//         </span>

//         <p className="mt-1">
//             {info?.cuisines?.join(", ")}
//         </p>

//         <p className="mt-1">
//             {info?.locality}
//         </p>
//         </div>
//     </div>

//     <h2 className="mt-10 text-2xl font-bold">Menu</h2>

//     </div>

//   )
// }

// export default RestaurantDetails;
