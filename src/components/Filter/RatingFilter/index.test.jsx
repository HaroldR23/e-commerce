import { render } from '@testing-library/react';
import { RatingFilter } from './';

describe("RatingFilter component", () => {
    it("renders the rating filter options", () => {
        const { container } = render(<RatingFilter/>);

        const ratingFilterContainer = container.querySelector("RatingFilterContainer");
        const textContent = container.querySelector("h2").textContent;
        const ratingsContainer = container.querySelector("RatingsContainer");

        expect(ratingFilterContainer).toBeInTheDocument;
        expect(textContent).toBe("Rates:")
        expect(ratingsContainer).toBeInTheDocument;
    });
});