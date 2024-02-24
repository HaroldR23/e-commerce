import { useEffect, useState } from "react";
import { AddRemoveItem } from "../../AddRemoveItem/AddRemoveItem";
import CartItemPropTypes from "./CartItemPropTypes";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import "./CartItem.css";
import { useContext } from "react";
import { SearchContext } from "../../../contexts/SearchContext";

function CartItem({price, productImg, numberOfProducts, title}) {
    const [count, setCount] = useState(numberOfProducts);
    const {
        setTotal,
        total,
        setNumberOfProducts,
        cartProducts,
        setCartProducts
    } = useContext(SearchContext);

    useEffect(() => {
        setCount(numberOfProducts)
    }, [numberOfProducts]);

    const handleAddItem = () => {
        setCount(count + 1);
        setNumberOfProducts(title, productImg, price, 1)
        const currentTotal = (total + price).toFixed(2)
        setTotal(parseFloat(currentTotal));
    };

    const handleRemoveItem = () => {
        setNumberOfProducts(title, productImg, price, count <= 1 ? 0 : -1)
        setCount(count <= 1 ? 1 : count - 1);
        const currentTotal = (total - price).toFixed(2)
        setTotal(count <= 1 ? total  : parseFloat(currentTotal))
    };
    const handleRemoveCartProduct = () => {
        const currentCartProducts = cartProducts.filter(cartProduct => cartProduct.id !== title);
        const currentTotal =(total - (count * price)).toFixed(2);
        setTotal(parseFloat(currentTotal));
        setCartProducts(currentCartProducts);
    };

    return (
        <div className="CartItemContainer">
            <AiOutlineCloseCircle className='RemoveCartProduct' onClick={handleRemoveCartProduct}/>
            <img src={productImg}/>
            <div className="TotalPrice">{price * count}</div>
            <AddRemoveItem
                count={count}
                handleAddItem={handleAddItem}
                handleRemoveItem={handleRemoveItem}
            />
        </div>
    );
}

CartItem.propTypes = CartItemPropTypes
export { CartItem };
