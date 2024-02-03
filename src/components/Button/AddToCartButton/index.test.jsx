import { render, screen } from '@testing-library/react';
import { AddToCartButton } from './';

describe("AddToCartButton component", () => {
    it("It should render a button with Add as text content", () => {
        const textContent = "Add";
        render(<AddToCartButton />);
        const addToCartButton = screen.getByRole("button");
        console.log(addToCartButton.textContent)
        expect(addToCartButton.textContent).toEqual(textContent);
    });
});
