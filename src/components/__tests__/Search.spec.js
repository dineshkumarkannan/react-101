import { render, screen, fireEvent } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "./../mocks/mockData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("Should render the Body component", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const resCardBefore = screen.getAllByTestId("resCard");

    expect(resCardBefore.length).toBe(9);

    const searchBtn = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "Pizza" } });

    fireEvent.click(searchBtn);

    const resCard = screen.getAllByTestId("resCard");

    expect(resCard.length).toBe(1);
});
