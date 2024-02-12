import { useContext, useState } from 'react';
import { Rating } from './Rating'
import './RatingFilter.css'
import { SearchContext } from '../../../contexts/SearchContext';

function RatingFilter ({options, handleFilteredProducts, handleFilterOptions}) {
    const [checkboxes, setCheckboxes] = useState(options);
    const {
        setIsFilteringByRate,
    } = useContext(SearchContext);
    const handleCheckboxChange = (e) => {
        const optionId = e.target.id;
        const currentCheckboxes = checkboxes.map((checkbox) => {
            if(checkbox.id === optionId) {
                if(checkbox.checked) {
                    handleFilterOptions({rate: null});
                    setIsFilteringByRate(false);
                } else {
                    handleFilterOptions({rate: optionId});
                    handleFilteredProducts();
                    setIsFilteringByRate(true);
                }
            }
            return checkbox.id === optionId ? 
            { ...checkbox, checked: checkbox.checked ? false : true } : 
            { ...checkbox, checked: false }
        });
        setCheckboxes(currentCheckboxes);
    };

     return (
        <div className='RatingFilterContainer'>
            <h2>Rates:</h2>
            {checkboxes.map((option, index) => 
                <div key={index} className='RatingsContainer'>
                    <input 
                        type="checkbox" 
                        onChange={handleCheckboxChange}
                        id={option.id} 
                        name={option.label} 
                        checked={option.checked}
                    />
                     <label htmlFor={option.id}>
                        <Rating stars={parseInt(option.id)} />
                     </label>
                </div>
            )}
        </div>
    )
}

export { RatingFilter }