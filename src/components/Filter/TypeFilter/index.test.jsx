import { screen, render, fireEvent } from "@testing-library/react";
import { TypeFilter } from "."
import { SearchContext } from "../../../contexts/SearchContext";
import { mockValue } from "../../../contexts/SearchContext/indexConfigTests";

describe("TypeFilter", () => {
    const testName = "Test name filter";
    const testOptions = [
        {id: "test id 1", label: "Test label 1"},
        {id: "test id 2", label: "Test label 2"},
        {id: "test id 3", label: "Test label 3"}
    ];
    const mockSearchedProducts = [
        {title: "Blazers", category: "test id 1"},
        {title: "Pants", category: "test id 2"},
        {title: "Pants 1", category: "test id 2"},
    ];
    const mockFilteredProducts = [
        {title: "Pants", category: "test id 2"},
        {title: "Pants 1", category: "test id 2"},
    ];
    it("should render name and checkbox options passed by props", () => {
        render(
            <SearchContext.Provider value={mockValue}>
                <TypeFilter name={testName} options={testOptions}/>
            </SearchContext.Provider>
        );
        const checkboxes = screen.getAllByRole("checkbox");
        const inputText = screen.getByRole("heading").textContent;
        expect(checkboxes.length).toBe(testOptions.length);
        expect(inputText).toBe(`${testName}:`);
    });
    it("should allows select just one checkbox at the same time, the last one selected", () => {
        render(
            <SearchContext.Provider value={mockValue}>
                <TypeFilter name={testName} options={testOptions}/>
            </SearchContext.Provider>
        );
        const checkboxes = screen.getAllByRole("checkbox");

        fireEvent.click(checkboxes[0])
        fireEvent.click(checkboxes[2])
        fireEvent.click(checkboxes[1])

        expect(checkboxes[0].checked).toBe(false);
        expect(checkboxes[2].checked).toBe(false);
        expect(checkboxes[1].checked).toBe(true);
    });
    it("should call to setFilteredProducts function to set the proper filtered products context", () => {
        render(
            <SearchContext.Provider value={{
                ...mockValue,
                searchedProducts: mockSearchedProducts
            }}>
                <TypeFilter name={testName} options={testOptions}/>
            </SearchContext.Provider>
        );
        const checkbox = screen.getAllByRole("checkbox");
        fireEvent.click(checkbox[1]);

        expect(mockValue.setIsFiltering).toHaveBeenCalledWith(true);
        expect(mockValue.setFilteredProducts).toHaveBeenCalledWith(mockFilteredProducts);
    });
});