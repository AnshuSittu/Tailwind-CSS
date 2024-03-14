import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";
import useRestaurantMenu from "../../utils/useRestaurantMenu";


const RestaurantMenu = () => {
 
  const { resID } = useParams();

  const resInfo = useRestaurantMenu(resID)


  if (resInfo === null) return <Shimmer />;

  // Destructuring
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h2>
      <h3>Menu</h3>
      <ul>
      {/* Added Optional Chaning to avoid this error if item list is not there */}
        {itemCards?.map((item) => (
          <li className="menu-list" key={item.card.info.id}>
            {item.card.info.name} - ₹ {item.card.info.price / 100  || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
