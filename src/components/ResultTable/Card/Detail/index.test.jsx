import { render, screen } from "@testing-library/react";
import { Detail } from "./";
import { SearchContext } from "../../../../contexts/SearchContext";
import { mockValue } from "../../../../contexts/SearchContext/indexConfigTests";

describe("Detail component", () => {
    it("renders title and price given as props", () => {
        const title = "Title test";
        const price = 100;
        const rate = 5;

        const { container } = render(
            <SearchContext.Provider value={mockValue}>
                <Detail price={price} title={title} rate={rate} />;
            </SearchContext.Provider>
        )
        const detailsCardContainer = container.querySelector(".DetailsCardContainer")
        const titleText = screen.getAllByText(title);
        const priceContent = screen.getByText(`$${price}`).textContent;

        expect(detailsCardContainer).toBeInTheDocument;
        expect(titleText).toBeInTheDocument;
        expect(priceContent).toBeInTheDocument;
        expect(title).toBe(title);
        expect(priceContent).toBe(`$${price}`);
    });
});