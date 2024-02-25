import RatingPropTypes from './RatingPropTypes';
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import './Rating.css'
import { useContext } from 'react';
import { SearchContext } from '../../../../contexts/SearchContext';

function Rating ( {stars} ) {
    const { widthSize } = useContext(SearchContext);

    const fillStars = () => {
        const etiquetas = [];
        const starSelected = [...Array(stars)].map((_, index) => (
            <AiFillStar className='StarFilled' key={index}/>
        ))
        const starNotSelected = [...Array(5-stars)].map((_, index) => (
            <AiOutlineStar className='StarNotFilled' key={index}/>
        ))
        etiquetas.push(starSelected)
        etiquetas.push(starNotSelected)
        return etiquetas
    }

    return (
        <div className='RatingContainer'>
            {fillStars()}
            {widthSize > 430 && <h3>& up</h3>}
        </div>
    )
}

Rating.propTypes = RatingPropTypes;

export { Rating }