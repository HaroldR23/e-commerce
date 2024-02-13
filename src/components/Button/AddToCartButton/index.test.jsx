import { fireEvent, render, screen } from '@testing-library/react';
import { AddToCartButton } from './';
import { SearchContext } from '../../../contexts/SearchContext';
import { mockValue } from '../../../contexts/SearchContext/indexConfigTests';
describe("AddToCartButton component", () => {
    const testImage = "test/image/path";
    const testNumberOfProducts = 1;
    const testPrice = 50;

    beforeEach(() => {
        render(
            <SearchContext.Provider value={mockValue}>
                <AddToCartButton
                    setCloseModal={jest.fn()}
                    image={testImage}
                    numberOfProducts={testNumberOfProducts}
                    price={testPrice}
                />
            </SearchContext.Provider>
        );
    })
    it("should render a button with Add as text content", () => {
        const textContent = "Add";
        const addToCartButton = screen.getByRole("button");
        expect(addToCartButton.textContent).toEqual(textContent);
    });
    it("should call some function from SearchContext to modify it when the user clicks on it", () => {
        const addToCartButton = screen.getByRole("button");
        fireEvent.click(addToCartButton);
        expect(mockValue.setTotal).toHaveBeenCalledWith(mockValue.total + (testNumberOfProducts * testPrice));
        expect(mockValue.setCartProducts).toHaveBeenCalledWith([
            ...mockValue.cartProducts, 
            {
                image: testImage,
                price: testPrice,
                numberOfProducts: testNumberOfProducts
            }
        ])
    });
});
