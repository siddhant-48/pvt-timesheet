import React from "react";
import { render } from "@testing-library/react";
import { Test } from "./Test";

describe("Test Component", () => {
    it("renders 'Hello World' text", () => {
        const { getByText } = render(<Test />);
        const helloWorldText = getByText("Hello World");
        expect(helloWorldText).toBeInTheDocument();
    });
});