import ButtonPropTypes from './ButtonPropTypes';
import './Button.css';

function Button({ type, handleOnCLick, className }) {
    return (
        <button className={className} onClick={handleOnCLick}>
            {type}
        </button>
    )
}

Button.propTypes = ButtonPropTypes;

export { Button };
