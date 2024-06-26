import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resid } = useParams();
    const [showItems, setShowItems] = useState(false);

    const resInfo = useRestaurantMenu(resid);

    if (resInfo === null) return <Shimmer />;
    // console.log("resInfo ", resInfo);
    // console.log(
    //     "resInfo ",
    //     resInfo.cards
    //         .map((card) => {
    //             return card?.card;
    //         })
    //         .filter((card) => card Object.keys(card?.card).includes("info"))
    // );
    // // Object.keys(card).includes("info")

    const { name, cuisines, costForTwoMessage } =
        resInfo?.cards[2]?.card?.card?.info;
    const itemsInfo =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (card) => card?.card?.card?.type === "CATEGORY_TYPE_RECOMMENDED"
        );
    const categories =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (c) =>
                c.card.card["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    // console.log("categories ", categories);
    return (
        <div className="text-center">
            <h1 className="text-2xl text-gray-900 my-2">{name}</h1>
            <h3 className="text-lg text-gray-600">{cuisines.join(", ")}</h3>
            <h3 className="font-bold">{costForTwoMessage}</h3>
            {categories.map((c, i) => (
                <RestaurantCategory
                    key={i}
                    data={c.card.card}
                    showItems={i === showItems ? true : false}
                    setShowItems={() => setShowItems(i)}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;
