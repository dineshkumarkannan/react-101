import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resid } = useParams();
    useEffect(() => {
        fetchDetails();
    }, []);
    const fetchDetails = async () => {
        const data = await fetch(MENU_API + `${resid}`);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } =
        resInfo?.cards[0]?.card?.card?.info;
    const itemsInfo =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (card) => card?.card?.card?.type === "CATEGORY_TYPE_RECOMMENDED"
        );
    console.log(itemsInfo);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            {itemsInfo[0]?.card?.card?.itemCards.map((item) => {
                console.log("testsss", item.card.info);
                return (
                    <li key={item?.card?.info.id}>
                        {item?.card?.info.name} - {"Rs."}
                        {item?.card?.info?.price / 100}
                    </li>
                );
            })}
            {/* {(() => {
                console.log("item, ", itemsInfo);
                if (itemsInfo.length > 0) {
                    // return <div>test</div>;
                    itemsInfo[0]?.card?.card?.itemCards.map((item) => {
                        // console.log("testsss", item.card.info);
                        <label>test</label>;
                        // <li key={item.card.info.id}>
                        //     {item.card.info} - {"Rs."}
                        //     {item.card.info.price / 100}
                        // </li>
                    });
                }
            })(itemsInfo)} */}
        </div>
    );
};

export default RestaurantMenu;
