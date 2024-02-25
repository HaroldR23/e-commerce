import SearchProviderPropTypes from "./SearchProviderPropTypes";
import { useState, useEffect, createContext } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFilteringByCategory, setIsFilteringByCategory] = useState(false);
  const [isFilteringByRate, setIsFilteringByRate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [priceProduct, setPriceProduct] = useState(0);
  const [rateProduct, setRateProduct] = useState(0);
  const [total, setTotal] = useState(0);
  const [widthSize, setWidthSize] = useState(window.innerWidth);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const [imageProduct, setImageProduct] = useState("");
  const [titleProduct, setTitleProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data
  };

  const setNumberOfProducts = (title, image, price, currentNumberOfProducts) => {
    const index = cartProducts.findIndex((cartProduct) => cartProduct.id === title);
    if (index >= 0) {
        cartProducts[index].numberOfProducts = cartProducts[index].numberOfProducts + currentNumberOfProducts;
        setCartProducts(cartProducts);
    } else {
        setCartProducts([
                ...cartProducts,
                {   
                    id: title,
                    image: image,
                    price: price,
                    numberOfProducts: currentNumberOfProducts
                }
            ]);
    }
};

useEffect(() => {
  const handleResize = () => {
    setWidthSize(window.innerWidth)
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };

}, []);

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
        setNumberOfProducts,
        searchedProducts,
        setProducts,
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
        total,
        setTotal,
        cartProducts, 
        setCartProducts,
        descriptionProduct,
        setDescriptionProduct,
        rateProduct,
        setRateProduct,
        isCartOpen,
        setIsCartOpen,
        widthSize
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = SearchProviderPropTypes;

export { SearchContext, SearchProvider };
