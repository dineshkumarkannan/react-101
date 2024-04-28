import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "./../mocks/resMockData.json";

describe("RestaurantCard component", () => {
    test("test RestaurantCard component is loaded", () => {
        render(<RestaurantCard resData={MOCK_DATA} />);
        const name = screen.getByText("Pizza Hut");
        expect(name).toBeInTheDocument();
    });
});
