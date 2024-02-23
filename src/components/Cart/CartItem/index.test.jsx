import { fireEvent, render, screen } from "@testing-library/react"
import { CartItem } from "."
import { SearchContext, SearchProvider } from "../../../contexts/SearchContext";
import { mockValue } from "../../../contexts/SearchContext/indexConfigTests";
import { number } from "prop-types";

describe("CartItem", () => {
    const numberOfProducts = 2;
    const price = 100;
    const productImg = "path/src/image";
    const title = "Test product title";
    let container;
    beforeEach(() => {
        container = render(
            <SearchContext.Provider value={mockValue}>
                <CartItem
                    numberOfProducts={numberOfProducts} 
                    price={price}
                    productImg={productImg} 
                    title={title}
                />
            </SearchContext.Provider>
        ).container;
    });

    it("should render an image using the productImg prop", () => {
        const imgElement = screen.getByRole("img");
        const srcContent = imgElement.getAttribute("src");

        expect(srcContent).toBe(productImg);
    });

    it("should render the total price based on the number of products and price passed as props", async () => {
        const totalPrice = container.querySelector(".TotalPrice").textContent;
        expect(totalPrice).toBe((price * numberOfProducts).toString());
    });

    it("should render a diferent total price when the user add or remove a product", async () => {
        const buttons = screen.getAllByRole("button");
        const addButton = buttons.filter(button => button.textContent === "+");
        let count = numberOfProducts;
        const numberOfClicksOnAddButton = 3;

        for (let index = 0; index < numberOfClicksOnAddButton; index++) {
            fireEvent.click(addButton[0]);
            count++
        };

        const totalPriceOfFiveProducts = container.querySelector(".TotalPrice").textContent;
        expect(totalPriceOfFiveProducts).toBe((price * (count)).toString());
        expect(mockValue.setNumberOfProducts).toHaveBeenCalled()
        expect(mockValue.setTotal).toHaveBeenCalled()

        const removeButton = buttons.filter(button => button.textContent === "-");
        const numberOfClicksOnRemoveButton = 2;

        for (let index = 0; index < numberOfClicksOnRemoveButton; index++) {
            fireEvent.click(removeButton[0]);
            count--
        };
        const totalPriceOfThreeProducts = container.querySelector(".TotalPrice").textContent;

        expect(totalPriceOfThreeProducts).toBe((price * (count)).toString());
        expect(mockValue.setNumberOfProducts).toHaveBeenCalled()
        expect(mockValue.setTotal).toHaveBeenCalled()
    });
})