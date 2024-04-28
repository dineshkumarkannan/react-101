import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("ContactUs component", () => {
    beforeAll(() => {
        // console.log("before all");
    });

    test("test contactUs component is loaded", () => {
        render(<ContactUs />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });

    test("test contactUs component, button is present", () => {
        render(<ContactUs />);
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    });

    test("test contactUs component, input fields are present", () => {
        render(<ContactUs />);
        // const name = screen.getByPlaceholderText("name");
        // const message = screen.getByPlaceholderText("message");
        // expect(name).toBeInTheDocument();
        // expect(message).toBeInTheDocument();

        const inputBoxes = screen.getAllByRole("textbox");
        // console.log(inputBoxes.length);
        expect(inputBoxes.length).toBe(2);
    });
});
