import { CDN_URL } from "./../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    return (
        <div className="m-4 p-4 w-[250px] h-[420px] rounded-md bg-gray-100 hover:bg-gray-50">
            <img
                src={CDN_URL + resData.info.cloudinaryImageId}
                className="hover h-[200px] w-[250px] rounded-lg"
            />
            <h3 className="font-bold py-3">{resData.info.name}</h3>
            <h5>{resData.info.cuisines.join(", ")}</h5>
            <div className="flex justify-between">
                <div className="text-sm">{resData.info.avgRating} star</div>
                <div className="text-sm">
                    {resData.info.sla.deliveryTime} minutes
                </div>
            </div>
        </div>
    );
};

export const withPromotedLabel = (RestaurantCard) => {
    return () => {
        return <RestaurantCard />;
    };
};

export default RestaurantCard;
