import { CDN_URL } from "./../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    return (
        <div
            className="restaurant-card"
            style={{
                backgroundColor: "#f0f0f0",
                padding: "5px",
            }}
        >
            <img
                src={CDN_URL + resData.info.cloudinaryImageId}
                style={{ width: "100%" }}
            />
            <h3>{resData.info.name}</h3>
            <h5>{resData.info.cuisines.join(", ")}</h5>
            <div>{resData.info.avgRating} star</div>
            <div>{resData.info.sla.deliveryTime} minutes</div>
        </div>
    );
};

export default RestaurantCard;
