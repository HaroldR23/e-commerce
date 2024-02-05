import { fireEvent, render, screen } from "@testing-library/react";
import { Card } from "./";
import { SearchContext } from "../../../contexts/SearchContext";
import { mockValue } from "../../../contexts/SearchContext/indexConfig";

describe("Detail component", () => {
    const title = "Title test";
    const price = "100";
    const rate = 5;
    const description = "Description test";
    const srcImageProp = "./path/img/src";
    let container;

    beforeEach(() => {
        container = render(
            <SearchContext.Provider value={mockValue}>
            <Card price={price} title={title} rate={rate} description={description} image={srcImageProp} />;
        </SearchContext.Provider>   
    ).container
})
    it("uses image path to render the image given as props", () => {
        const cardContainer = container.querySelector(".CardContainer");
        const srcImage = screen.getByRole("img").getAttribute("src");

        expect(cardContainer).toBeInTheDocument;
        expect(srcImage).toBe(srcImageProp);
    });

    it("should modify some SearchContext attributes when the user clicks on it", () => {
        const cardContainer = container.querySelector(".CardContainer");
        fireEvent.click(cardContainer)
        expect(mockValue.setIsOpen).toHaveBeenCalledWith(true);
        expect(mockValue.setImageProduct).toHaveBeenCalledWith(srcImageProp);
        expect(mockValue.setTitleProduct).toHaveBeenCalledWith(title);
        expect(mockValue.setPriceProduct).toHaveBeenCalledWith(price);
        expect(mockValue.setDescriptionProduct).toHaveBeenCalledWith(description);
        expect(mockValue.setRateProduct).toHaveBeenCalledWith(rate);

    });
});
