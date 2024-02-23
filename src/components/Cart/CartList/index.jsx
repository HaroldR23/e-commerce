import { useContext, useEffect } from "react"
import { SearchContext } from "../../../contexts/SearchContext"
import { CartItem } from "../CartItem";
import { ContinueCartButton } from "../../Button/ContinueCartButton";
import "./CartList.css";

function CartList() {
    const {
        cartProducts,
        total,
    } = useContext(SearchContext);

    return (
        <div className="CartListContainer">
            <div className="SubTotalContainer">
                <div id="subTotalText">Subtotal</div>
                <div id="subTotalNumber">${total}</div>
                <ContinueCartButton/>
            </div>
            {
                cartProducts?.map((cartProduct, index) => (
                    <CartItem
                        title={cartProduct.id}
                        key={index}
                        productImg={cartProduct.image}
                        price={cartProduct.price} 
                        numberOfProducts={cartProduct.numberOfProducts}
                    />
                ))
            }
        </div>
    )
}

export { CartList };
