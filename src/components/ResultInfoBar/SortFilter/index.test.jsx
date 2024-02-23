import { fireEvent, render, screen } from "@testing-library/react";
import { Card, SortFilter } from "./";
import { SearchContext } from "../../../contexts/SearchContext";
import { mockValue } from "../../../contexts/SearchContext/indexConfigTests";

describe("SortFilter component", () => {
    const mockSearchedProducts = [
        {title: "Blazers", price: 7.9},
        {title: "Pants", price: 6.5},
        {title: "Apparel", price: 9},
    ];
    const productsPriceLowToHigh = [
        {title: "Pants", price: 6.5},
        {title: "Blazers", price: 7.9},
        {title: "Apparel", price: 9},
    ];
    const productsPriceHighToLow = [
        {title: "Apparel", price: 9},
        {title: "Blazers", price: 7.9},
        {title: "Pants", price: 6.5},
    ];
    const productsAlphabeticallySorted = [
        {title: "Apparel", price: 9},
        {title: "Blazers", price: 7.9},
        {title: "Pants", price: 6.5},
    ];

    beforeEach(() => {
        render(
        <SearchContext.Provider value={{
                ...mockValue,
                searchedProducts: mockSearchedProducts
            }}
        >
            <SortFilter />
        </SearchContext.Provider>   
    );
})
    it("renders four options like sorting options, Name, low to high and high to low prices", async () => {
        const options = await screen.findAllByRole("option");

        expect(options.length).toBe(4);
        expect(options[0].textContent).toBe("Sorting options");
        expect(options[1].textContent).toBe("Name");
        expect(options[2].textContent).toBe("Price: Low to High");
        expect(options[3].textContent).toBe("Price: High to Low");
    });

    it("when the user clicks on Low to High option the products in the context should be sorted by price low to high", () => {
        const lowToHighOption = screen.getByText("Price: Low to High");
        fireEvent.click(lowToHighOption);
        expect(mockValue.setProducts).toHaveBeenCalledWith(productsPriceLowToHigh)
    });
    it("when the user clicks on High to Low option the products in the context should be sorted by price high to low", () => {
        const highToLowOption = screen.getByText("Price: High to Low");
        fireEvent.click(highToLowOption);
        expect(mockValue.setProducts).toHaveBeenCalledWith(productsPriceHighToLow)
    });
    it("when the user clicks on Low to High option the products in the context should be sorted by price low to high", () => {
        const nameOption = screen.getByText("Name");
        fireEvent.click(nameOption);
        expect(mockValue.setProducts).toHaveBeenCalledWith(productsAlphabeticallySorted);
    });

});
