import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);
    const { resid } = useParams();

    const resInfo = useRestaurantMenu(resid);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } =
        resInfo?.cards[0]?.card?.card?.info;
    const itemsInfo =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (card) => card?.card?.card?.type === "CATEGORY_TYPE_RECOMMENDED"
        );
    // console.log(itemsInfo);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            {itemsInfo[0]?.card?.card?.itemCards.map((item) => {
                return (
                    <li key={item?.card?.info.id}>
                        {item?.card?.info.name} - {"Rs."}
                        {item?.card?.info?.price / 100}
                    </li>
                );
            })}
        </div>
    );
};

export default RestaurantMenu;
