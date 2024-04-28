import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "./../mocks/mockResMenu.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("should render RestaurantMenu component", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
        )
    );

    const accHeader = screen.getByText("Biryani(9)");
    fireEvent.click(accHeader);
    const totalItems = screen.getAllByTestId("item");
    expect(totalItems.length).toBe(9);
    const addBtns = screen.getAllByRole("button", { name: "Add +" });

    fireEvent.click(addBtns[0]);
    fireEvent.click(addBtns[1]);

    const cartText = screen.getByText("Cart(2 items)");
    expect(cartText).toBeInTheDocument();
    const totalItemsInCartPage = screen.getAllByTestId("item");

    expect(totalItemsInCartPage.length).toBe(11);
});
