import SearchProviderPropTypes from "./SearchProviderPropTypes";
import { useState, useEffect, createContext } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isFilteringByCategory, setIsFilteringByCategory] = useState(false)
  const [isFilteringByRate, setIsFilteringByRate] = useState(false)
  const [filterOptions, setFilterOptions] = useState({
    category: "",
    // rate: 0,
});

  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [imageProduct, setImageProduct] = useState("");
  const [titleProduct, setTitleProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [rateProduct, setRateProduct] = useState(0);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productList = await getData();
        setProducts(productList);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const searchedProducts = products.filter((product) => {
    const productName = product.title.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return productName.includes(searchText);
  });

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        searchedProducts,
        setProducts,
        filterOptions, setFilterOptions,
        isLoading,
        isOpen,
        isFilteringByCategory, 
        setIsFilteringByCategory,
        isFilteringByRate, 
        setIsFilteringByRate,
        setIsOpen,
        imageProduct,
        setImageProduct,
        filteredProducts, 
        setFilteredProducts,
        titleProduct,
        setTitleProduct,
        priceProduct,
        setPriceProduct,
        descriptionProduct,
        setDescriptionProduct,
        rateProduct,
        setRateProduct
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = SearchProviderPropTypes;

export { SearchContext, SearchProvider };
