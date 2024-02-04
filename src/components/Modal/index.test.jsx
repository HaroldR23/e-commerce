import { Modal } from '.';
import { mockValue } from './indexConfig';
import { render, screen } from '@testing-library/react';
import { SearchContext } from '../../contexts/SearchContext';
describe("Modal", () => {
    it("It should render a modal container content based on the context", () => {
        render(
            <SearchContext.Provider value={
                {
                    ...mockValue, 
                    titleProduct: "Title test product",
                    priceProduct: "100",
                    descriptionProduct: "Test description",
                } 
            }
            >
                <Modal/>
            </SearchContext.Provider>
        );
        const titleTextContent = screen.getByText("Title test product");
        const descriptionContent = screen.getByText("Test description");
        const priceContent = screen.getByText("$100");
        expect(priceContent).toBeInTheDocument;
        expect(titleTextContent).toBeInTheDocument;
        expect(descriptionContent).toBeInTheDocument;
    });
});
