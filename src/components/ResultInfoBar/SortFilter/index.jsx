import { useContext } from 'react';
import './SortFilter.css'
import { SearchContext } from '../../../contexts/SearchContext';

function SortFilter () {
    const {
        searchedProducts,
        setProducts,
        // isFiltering,
        isFilteringByCategory, isFilteringByRate,
        filteredProducts,
        setFilteredProducts
    } = useContext(SearchContext);

    const sortPriceLowToHigh = (products) => {
        const sortedProducts = [...products].sort((priceA, priceB) => priceA.price - priceB.price);
        if((isFilteringByCategory ||  isFilteringByRate)) return setFilteredProducts(sortedProducts);
        return setProducts(sortedProducts);
    };
    const sortPriceHighToLow = (products) => {
        const sortedProducts = [...products].sort((priceA, priceB) => priceB.price - priceA.price);
        if((isFilteringByCategory ||  isFilteringByRate)) return setFilteredProducts(sortedProducts);
        return setProducts(sortedProducts);
    };
    const sortAlphabetically = (products) => {
        const sortedProducts = [...products].sort((priceA, priceB) => priceA.title.localeCompare(priceB.title));
        if((isFilteringByCategory ||  isFilteringByRate)) return setFilteredProducts(sortedProducts);
        return setProducts(sortedProducts);
    };

    const handleOnClick = (e) => {
        const targetValue = e.target.value;
        switch(targetValue){
            case "Price_Low":
                (isFilteringByCategory ||  isFilteringByRate) ? sortPriceLowToHigh(filteredProducts) : sortPriceLowToHigh(searchedProducts)
                break;
            case "Price_High":
                (isFilteringByCategory ||  isFilteringByRate) ? sortPriceHighToLow(filteredProducts) : sortPriceHighToLow(searchedProducts)
                break;
            case "Name":
                (isFilteringByCategory ||  isFilteringByRate) ? sortAlphabetically(filteredProducts) : sortAlphabetically(searchedProducts)
                break;
            default: 
                break;
        }
    }

    return (
        <div className='SortFilterContainer'>
            <select onClick={handleOnClick} name="order" id="order">
                <option value="">Sorting options</option>
                <option value="Name">Name</option>
                <option value="Price_Low">Price: Low to High</option>
                <option value="Price_High">Price: High to Low</option>
            </select>
        </div>
    )
}

export { SortFilter }
