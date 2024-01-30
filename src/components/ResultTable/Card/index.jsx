import { useContext } from 'react';
import { Detail } from './Detail'
import CardPropTypes from './CardPropTypes';
import { SearchContext } from '../../../contexts/SearchContext';
import './Card.css';

function Card ({ image, title, price, description, rate }) {
    const {
        setIsOpen,
        setImageProduct,
        setTitleProduct,
        setPriceProduct,
        setDescriptionProduct,
        setRateProduct
    } = useContext(SearchContext);

    const openModal = () => {
        setIsOpen(true)
        setImageProduct(image)
        setTitleProduct(title)
        setPriceProduct(price)
        setDescriptionProduct(description)
        setRateProduct(rate)
    }

    return (
        <div className='CardContainer' onClick={openModal}>
            <div className='ProductImageContainer'>
                <img src={image}/>
            </div>
            <Detail 
                title = {title}
                price = {price}
                rate = {rate}
            />
        </div>
    )
}

Card.propTypes = CardPropTypes;

export { Card }