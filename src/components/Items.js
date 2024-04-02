import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const Items = ({ items }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        console.log(item);
        dispatch(addItem(item));
    };

    return (
        <div className="text-left bg-white px-4">
            {items.map((item) => {
                return (
                    <div
                        className="my-8 py-10 border-b-2 flex justify-between"
                        key={item.card.info.id}
                    >
                        <div>
                            <h3 className="text-lg text-gray-700">
                                {item.card.info.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {" "}
                                {item.card.info.price / 100}
                            </p>
                            <p className="text-sm text-gray-400">
                                {item.card.info.description}
                            </p>
                        </div>
                        <div>
                            <img
                                className="w-28 h-auto"
                                src={CDN_URL + item.card.info.imageId}
                            />
                            <button
                                className="py-1 px-2 border border-spacing-1 absolute mt-[-2px] text-center bg-gray-300"
                                onClick={() => handleAddItem(item)}
                            >
                                Add +
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default Items;
