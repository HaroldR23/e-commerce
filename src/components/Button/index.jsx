import ButtonPropTypes from './ButtonPropTypes';
import './Button.css';

function Button({ type, handleOnCLick }) {
    return (
        <button className="Button" onClick={handleOnCLick}>
            {type}
        </button>
    )
}

Button.propTypes = ButtonPropTypes;

export { Button };
