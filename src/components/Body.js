import { useState } from "react";
import { MOCK_DATA } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(MOCK_DATA);

    return (
        <div className="app-body">
            <div className="filter">
                <button
                    type="button"
                    className="fileter-btn"
                    onClick={() => {
                        const filtered = listOfRestaurant.filter(
                            (res) => res.info.avgRating > 4
                        );
                        console.log(listOfRestaurant);
                        setListOfRestaurant(filtered);
                        console.log(listOfRestaurant);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="restaraunt-container">
                {listOfRestaurant.map((data) => {
                    return <RestaurantCard key={data.info.id} resData={data} />;
                })}
            </div>
        </div>
    );
};

export default Body;
