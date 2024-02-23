import { render, screen } from "@testing-library/react"
import { CartList } from "."
import { SearchContext } from "../../../contexts/SearchContext"
import { mockValue } from "../../../contexts/SearchContext/indexConfigTests"

describe("CartList", () => {
    const mockCartProducts = [
        {
            title: "Test title 1",
            image: "path/src/image",
            price: 100,
            numberOfProducts: 1,
        },
        {
            title: "Test title 2",
            image: "path/src/image",
            price: 50,
            numberOfProducts: 1,
        },
        {
            title: "Test title 3",
            image: "path/src/image",
            price: 15,
            numberOfProducts: 2,
        }
    ];
    const mockTotal = 165;
    let container;
    beforeEach(() => {
        container= render(
            <SearchContext.Provider value={
                {
                    ...mockValue, 
                    cartProducts: mockCartProducts,
                    total:  mockTotal
                }}>
                <CartList/>
            </SearchContext.Provider>
        ).container;
    });
    
    it("should render a list of products added to the cart", () => {
        const cartItems = container.querySelectorAll(".CartItemContainer");
        expect(cartItems).toHaveLength(mockCartProducts.length);
    });

    it("should render the sub total", () => {
        const subTotalContainer = container.querySelector(".SubTotalContainer");
        const subTotalValue = subTotalContainer.children[1].textContent;

        expect(subTotalValue).toBe(`$${mockTotal}`);
    });
});
