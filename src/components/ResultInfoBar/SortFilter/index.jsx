import { useContext } from 'react';
import './SortFilter.css'
import { SearchContext } from '../../../contexts/SearchContext';

function SortFilter () {
    const {
        searchedProducts,
        setProducts,
        isFiltering,
        filteredProducts,
        setFilteredProducts
    } = useContext(SearchContext);

    const sortPriceLowToHigh = (products) => {
        const sortedProducts = [...products].sort((priceA, priceB) => priceA.price - priceB.price);
        if(isFiltering) return setFilteredProducts(sortedProducts);
        return setProducts(sortedProducts);
    };
    const sortPriceHighToLow = (products) => {
        const sortedProducts = [...products].sort((priceA, priceB) => priceB.price - priceA.price);
        if(isFiltering) return setFilteredProducts(sortedProducts);
        return setProducts(sortedProducts);
    };
    const sortAlphabetically = (products) => {
        const sortedProducts = [...products].sort((priceA, priceB) => priceA.title.localeCompare(priceB.title));
        if(isFiltering) return setFilteredProducts(sortedProducts);
        return setProducts(sortedProducts);
    };

    const handleOnClick = (e) => {
        const targetValue = e.target.value;
        switch(targetValue){
            case "Price_Low":
                isFiltering ? sortPriceLowToHigh(filteredProducts) : sortPriceLowToHigh(searchedProducts)
                break;
            case "Price_High":
                isFiltering ? sortPriceHighToLow(filteredProducts) : sortPriceHighToLow(searchedProducts)
                break;
            case "Name":
                isFiltering ? sortAlphabetically(filteredProducts) : sortAlphabetically(searchedProducts)
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
