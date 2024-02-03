import { render, screen } from '@testing-library/react';
import { ContinueCartButton } from './';

describe("ContinueCartButton component", () => {
    it("It should render a button with Continue as text content", () => {
        const textContent = "Continue";
        render(<ContinueCartButton />);
        const continueCartButton = screen.getByRole("button");
        console.log(continueCartButton.textContent)
        expect(continueCartButton.textContent).toEqual(textContent);
    });
});
