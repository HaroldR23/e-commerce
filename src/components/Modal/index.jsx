import { useContext, useState } from 'react';
import './Modal.css'
import { Rating } from "../Filter/RatingFilter/Rating"
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { SearchContext } from '../../contexts/SearchContext';
import { AddToCartButton } from '../Button/AddToCartButton';
import { Button } from '../Button';
import { AddRemoveItem } from '../AddRemoveItem/AddRemoveItem';

function Modal () {
    const [count, setCount] = useState(1)
    const {
        setIsOpen,
        imageProduct,
        titleProduct,
        priceProduct,
        descriptionProduct,
        rateProduct,
    } = useContext(SearchContext);

    const setCloseModal = () => {
        setIsOpen(false)
    };
    const handleAddItem = () => {
        setCount(count + 1)
    };
    const handleRemoveItem = () => {
        setCount(count <= 1 ? 1 : count - 1)
    };

    return (
        <div className='ModalContainer'>
            <div className='ContentModalContainer'>
                <div className='ProductImageContainer'>
                    <AiOutlineCloseCircle className='closeModal' onClick={setCloseModal}/>
                    <img src={imageProduct}/>
                </div>
                <div className="DetailsModalContainer">
                    <div className="HeaderDetailModalContainer">
                        <h3>{titleProduct}</h3>
                        <h3>${priceProduct}</h3>
                    </div>
                    <Rating stars={rateProduct}/>
                    <h6>{descriptionProduct}</h6>
                    <div className='FooterModalContainer'>
                        <AddRemoveItem
                            count={count}
                            handleAddItem={handleAddItem}
                            handleRemoveItem={handleRemoveItem}
                        />
                        <AddToCartButton
                            title={titleProduct}
                            setCloseModal={setCloseModal}
                            numberOfProducts={count}
                            image={imageProduct}
                            price={priceProduct}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Modal }