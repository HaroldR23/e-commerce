import { Button } from "../Button";
import AddRemoveItemPropTypes from "./AddRemoveItemPropTypes";
import "./AddRemoveItem.css";

function AddRemoveItem({handleAddItem, handleRemoveItem, count}){
    return (
        <div className="AddRemoveItem">
            <Button className="OperationItem" type="-" handleOnCLick={handleRemoveItem}/>
                <div>{count}</div>
            <Button className="OperationItem" type="+" handleOnCLick={handleAddItem}/>
        </div>
    );
};

AddRemoveItem.propTypes = AddRemoveItemPropTypes;

export { AddRemoveItem };
