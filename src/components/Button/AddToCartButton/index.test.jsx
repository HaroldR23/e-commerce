import { render, screen } from '@testing-library/react';
import { AddToCartButton } from './';

describe("AddToCartButton component", () => {
    it("It should render a button with Add as text content", () => {
        const textContent = "Add";
        render(<AddToCartButton />);
        const addToCartButton = screen.getByRole("button");
        expect(addToCartButton.textContent).toEqual(textContent);
    });
});
