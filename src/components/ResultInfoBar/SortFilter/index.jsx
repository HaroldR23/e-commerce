import { useContext } from 'react';
import './SortFilter.css'
import { SearchContext } from '../../../contexts/SearchContext';

function SortFilter () {
    const {
        searchedProducts,
        setProducts
    } = useContext(SearchContext);
    const sortPriceLowToHigh = (products) => {
        products.sort((priceA, priceB) => priceA.price - priceB.price);
        setProducts(products);
    };
    const sortPriceHighToLow = (products) => {
        products.sort((priceA, priceB) => priceB.price - priceA.price);
        setProducts(products);
    };
    const sortAlphabetically = (products) => {
        products.sort((priceA, priceB) => priceA.title.localeCompare(priceB.title));
        setProducts(products);
    };
    const handleOnClick = (e) => {
        const targetValue = e.target.value;
        switch(targetValue){
            case "Price_Low":
                sortPriceLowToHigh(searchedProducts)
                break;
            case "Price_High":
                sortPriceHighToLow(searchedProducts)
                break;
            case "Name":
                sortAlphabetically(searchedProducts)
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
