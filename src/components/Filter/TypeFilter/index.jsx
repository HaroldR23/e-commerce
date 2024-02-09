import TypeFilterPropTypes from './TypeFilterPropTypes';
import './TypeFilter.css'
import { useContext, useState } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';

function TypeFilter ({name, options}) {
    const [checkboxes, setCheckboxes] = useState(options.map(option => (
        {id: option.id, label: option.label, checked:false}
    )));
    const { 
        searchedProducts, 
        setIsFiltering, 
        setFilteredProducts
    } = useContext(SearchContext);

    const handleCheckboxChange = (e) => {
        const optionId = e.target.id;
            setCheckboxes((prevCheckboxes) =>
                prevCheckboxes.map((checkbox) =>
                    checkbox.id === optionId
                    ? { ...checkbox, checked: checkbox.checked ? setIsFiltering(false) && false : true }
                    : { ...checkbox, checked: false }
            ));
    };
    const handleOnClick = (e) => {
        const productId = e.target.id
        const filteredProducts = searchedProducts.filter(product => product.category === productId);
        setIsFiltering(true)
        setFilteredProducts(filteredProducts);
    };  

    return (
        <div className='TypeFilterContainer'>
            <h2>{name}:</h2>
            {checkboxes.map((option, id) => 
                <div
                    key={id}
                    className='CheckBox'
                >
                    <input 
                        type="checkbox" 
                        onChange={handleCheckboxChange} 
                        onClick={handleOnClick}  
                        id={option.id} 
                        name={option.label} 
                        checked={option.checked}
                    />
                    <label htmlFor={option.id}>{option.label}</label>
                </div>
            )}
        </div>
    )
}

TypeFilter.propTypes = TypeFilterPropTypes;

export { TypeFilter }