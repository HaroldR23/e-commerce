import { useContext } from "react";
import { Button } from "../";
import { SearchContext } from "../../../contexts/SearchContext";
import AddToCartButtonPropTypes from "./AddToCartButtonPropTypes";

function AddToCartButton({image, numberOfProducts, price, setCloseModal, title}) {
    const {
        setTotal,
        total,
        setNumberOfProducts,
    } = useContext(SearchContext);
    const handleOnClick = () => {
        const currentTotal = (total + (numberOfProducts * price)).toFixed(2)
        setTotal(parseFloat(currentTotal));
        setNumberOfProducts(title, image, price, numberOfProducts);
        setCloseModal();
    };
    return (
        <Button type="Add" className="Button" handleOnCLick={handleOnClick}/>
    )
}

AddToCartButton.propTypes = AddToCartButtonPropTypes;
export { AddToCartButton }
