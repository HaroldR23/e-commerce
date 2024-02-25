import { TypeFilter } from './TypeFilter'
import { RatingFilter } from './RatingFilter'
import './Filter.css'
import { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../../contexts/SearchContext'

function Filter () {
    const [filterOptions, setFilterOptions] = useState({});
    const {
        searchedProducts,
        setFilteredProducts,
        widthSize
    } = useContext(SearchContext);

    useEffect(() => {
        handleFilteredProducts()
    }, [filterOptions]);
    const deleteFilterOptionKey = (filterOptions, optionFilterName) => {
        const newFilterOptions = Object.keys(filterOptions).reduce((obj, key) => {
            if (key !== optionFilterName) {
              obj[key] = filterOptions[key];
            }
            return obj;
          }, {});
        return newFilterOptions;
    };
    const handleFilterOptions = (currentfilterOption) => {
        const optionFilterName= Object.keys(currentfilterOption)[0];
        if(!currentfilterOption[optionFilterName]) {
            const newFilterOptions = deleteFilterOptionKey(filterOptions, optionFilterName);
            setFilterOptions(newFilterOptions)
        } else setFilterOptions({
            ...filterOptions,
            [optionFilterName]: currentfilterOption[optionFilterName]
        });
    };
    const handleFilteredProducts = () => {
        const fileredProducts = searchedProducts.filter((product) => {
            for(const option in filterOptions) {
                if(option === "rate"){
                    if(product.rating[option] >= filterOptions[option]) {
                        continue;
                    } else return false;
                } else {
                    if(product[option] === filterOptions[option]) {
                        continue;
                    } else return false;
                }
            }
            return true;
        });
        setFilteredProducts(fileredProducts);
    };

    return (
        <div>
            {widthSize > 430 && <div className='FilterContainer'>
                <TypeFilter
                    handleFilteredProducts={handleFilteredProducts}
                    handleFilterOptions={handleFilterOptions}
                    name='Category'
                    options={[
                        {id: "men's clothing", label: "Men's Clothing", checked: false},
                        {id: "women's clothing", label: "Women's Clothing", checked: false},
                        {id: "jewelery", label: "Jewelery", checked: false},
                        {id: "electronics", label: "Electronics", checked: false}
                    ]}
                    />
                <RatingFilter
                    handleFilteredProducts={handleFilteredProducts}
                    handleFilterOptions={handleFilterOptions}
                    options={[
                        { id: "4", label: "4", checked: false },
                        { id: "3", label: "3", checked: false },
                        { id: "2", label: "2", checked: false },
                        { id: "1", label: "1", checked: false },
                    ]}
                    />
            </div>}
        </div>
    )
}

export { Filter }