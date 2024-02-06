const mockSetFunction = jest.fn();

export const mockValue = {
    searchValue: "",
    setSearchValue: mockSetFunction,
    setProducts: mockSetFunction,
    searchedProducts: [],
    isLoading: true,
    isOpen: false,
    setIsOpen: mockSetFunction,
    imageProduct: "",
    setImageProduct: mockSetFunction,
    titleProduct: "",
    setTitleProduct: mockSetFunction,
    priceProduct: "",
    setPriceProduct: mockSetFunction,
    descriptionProduct: "",
    setDescriptionProduct: mockSetFunction,
    rateProduct: 0,
    setRateProduct: mockSetFunction,
}