import { render, screen } from '@testing-library/react';
import { Button } from './';

describe("Button component", () => {
    it("It should render a button with properly text content took from prop type", () => {
        const textContent = "Test text content";
        render(<Button type={textContent}/>);
        const button  = screen.getByRole("button");
        expect(button.textContent).toEqual(textContent);
    });
});
