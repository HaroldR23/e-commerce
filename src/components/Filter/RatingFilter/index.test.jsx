import { render } from '@testing-library/react';
import { RatingFilter } from './';
import { SearchContext } from '../../../contexts/SearchContext';
import { mockValue } from '../../../contexts/SearchContext/indexConfigTests';

describe("RatingFilter component", () => {
    it("renders the rating filter options", () => {
        const testOptions = [
            {id: "1", label: "1", checked: false},
            {id: "2", label: "2", checked: false},
            {id: "3", label: "3", checked: false}
        ];
        const { container } = render(
            <SearchContext.Provider value={mockValue}>
                <RatingFilter 
                    options={testOptions} 
                    handleFilterOptions={jest.fn()} 
                    handleFilteredProducts={jest.fn()}
                />
            </SearchContext.Provider>
        );

        const ratingFilterContainer = container.querySelector("RatingFilterContainer");
        const textContent = container.querySelector("h2").textContent;
        const ratingsContainer = container.querySelector("RatingsContainer");

        expect(ratingFilterContainer).toBeInTheDocument;
        expect(textContent).toBe("Rates:")
        expect(ratingsContainer).toBeInTheDocument;
    });
});