import { useContext } from "react";
import { Button } from "../";
import { SearchContext } from "../../../contexts/SearchContext";
import AddToCartButtonPropTypes from "./AddToCartButtonPropTypes";

function AddToCartButton({image, numberOfProducts, price, setCloseModal}) {
    const {
        setTotal,
        total,
        cartProducts,
        setCartProducts
    } = useContext(SearchContext);
    const handleOnClick = () => {
        setTotal(total + (numberOfProducts * price));
        setCartProducts([
            ...cartProducts,
            {
                image: image,
                price: price,
                numberOfProducts: numberOfProducts
            }
        ]);
        setCloseModal();
    };
    return (
        <Button type="Add" className="Button" handleOnCLick={handleOnClick}/>
    )
}

AddToCartButton.propTypes = AddToCartButtonPropTypes;
export { AddToCartButton }
