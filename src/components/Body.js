import { useState, useEffect, useContext } from "react";
import { MOCK_DATA } from "../utils/mockData";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardWithPromoted = withPromotedLabel(RestaurantCard);

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

    const { setUserName, loggedInUser } = useContext(UserContext);

    return listOfRestaurant.length <= 0 ? (
        <Shimmer />
    ) : (
        <div className="app-body">
            <div className="filter">
                <div className="search m-4 p-4">
                    <input
                        type="text"
                        value={searchText}
                        className="border border-solid shadow-sm"
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="mx-2"
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
                    className="m-2 px-4 py-2 bg-pink-50"
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
                <div>
                    <input
                        className="border border-gray p-2"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredData.map((data) => {
                    return (
                        <Link
                            key={data.info.id}
                            to={"/restaurant/" + data.info.id}
                        >
                            {/* {console.log(data.info)}  */}
                            <RestaurantCard resData={data} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Body;
