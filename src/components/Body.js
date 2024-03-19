import { useState, useEffect } from "react";
import { MOCK_DATA } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        const restaurantData = json.data.cards.filter(
            (d) => d.card.card.id === "restaurant_grid_listing"
        );
        setListOfRestaurant(
            restaurantData[0]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
        setFilteredData(
            restaurantData[0]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
        return (
            <h1>You're offline! Please check your internet connection :)</h1>
        );

    return listOfRestaurant.length <= 0 ? (
        <Shimmer />
    ) : (
        <div className="app-body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            console.log(searchText);
                            setFilteredData(
                                listOfRestaurant.filter((res) =>
                                    res.info.name
                                        .toLowerCase()
                                        .includes(searchText.toLowerCase())
                                )
                            );
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    type="button"
                    className="fileter-btn"
                    onClick={() => {
                        const filtered = listOfRestaurant.filter(
                            (res) => res.info.avgRating > 4.3
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
                {filteredData.map((data) => {
                    return (
                        <Link
                            key={data.info.id}
                            to={"/restaurant/" + data.info.id}
                        >
                            <RestaurantCard resData={data} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Body;
