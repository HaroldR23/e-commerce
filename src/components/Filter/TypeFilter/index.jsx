import TypeFilterPropTypes from './TypeFilterPropTypes';
import './TypeFilter.css'
import { useContext, useState } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';
import { Rating } from '../RatingFilter/Rating';

function TypeFilter ({name, options, handleFilterOptions, handleFilteredProducts}) {
    const [checkboxes, setCheckboxes] = useState(options);
    const { 
        setIsFilteringByCategory
    } = useContext(SearchContext);

    const handleCheckboxChange = (e) => {
        const optionId = e.target.id;
        const currentCheckboxes = checkboxes.map((checkbox) => {
            if(checkbox.id === optionId) {
                if(checkbox.checked) {
                    handleFilterOptions({category: null});
                    setIsFilteringByCategory(false);
                } else {
                    handleFilterOptions({category: optionId});
                    handleFilteredProducts();
                    setIsFilteringByCategory(true);
                }
            }
            return checkbox.id === optionId ? 
            { ...checkbox, checked: checkbox.checked ? false : true } : 
            { ...checkbox, checked: false }
        });
        setCheckboxes(currentCheckboxes);
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