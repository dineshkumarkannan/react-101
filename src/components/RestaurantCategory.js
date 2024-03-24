import { useState } from "react";
import Items from "./Items";

const RestaurantCategory = ({ data, showItems, setShowItems }) => {
    // const [showItems, setShowItems] = useState(false);

    const itemsHandler = () => {
        // setShowItems(!showItems);
        setShowItems();
    };

    return (
        <div>
            <div className="w-2/3 mx-auto my-4 shadow-lg bg-gray-50 p-4">
                <div
                    className="flex justify-between cursor-pointer"
                    onClick={itemsHandler}
                >
                    <span className="text-lg text-gray-900">
                        {data?.title}({data?.itemCards.length})
                    </span>
                    <span>⬇️</span>
                </div>
                <div>{showItems && <Items items={data.itemCards} />}</div>
            </div>
        </div>
    );
};

export default RestaurantCategory;
