import { useEffect, useState } from "react";
import { AddRemoveItem } from "../../AddRemoveItem/AddRemoveItem";
import CartItemPropTypes from "./CartItemPropTypes";
import "./CartItem.css";
import { useContext } from "react";
import { SearchContext } from "../../../contexts/SearchContext";

function CartItem({price, productImg, numberOfProducts, title}) {
    const [count, setCount] = useState(numberOfProducts);
    const {
        setTotal,
        total,
        setNumberOfProducts
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

    return (
        <div className="CartItemContainer">
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
