import ButtonPropTypes from './ButtonPropTypes';
import './Button.css';

function Button({ type }) {
    return (
        <button className="Button">
            {type}
        </button>
    )
}

Button.propTypes = ButtonPropTypes;

export { Button };
