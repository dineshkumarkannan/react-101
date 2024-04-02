import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "./../utils/cartSlice";
import Items from "./Items";

const Cart = () => {
    const CartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    console.log(CartItems);

    // const clearCart = () => {
    //     dispatch(clearItem());
    // };
    return (
        <div className="text-center p-4 m-4">
            <h1 className="font-bold text-2xl">Cart</h1>

            <div className="w-2/4 mx-auto">
                {CartItems.length > 0 && (
                    <button
                        className="p-2 m-4 bg-slate-100 hover:cursor-pointer"
                        onClick={() => dispatch(clearItem())}
                    >
                        Clear Cart
                    </button>
                )}
                {CartItems.length === 0 && (
                    <h1>Your Cart is empty, let's add your items :)</h1>
                )}
                <Items items={CartItems} />
            </div>
        </div>
    );
};

export default Cart;
