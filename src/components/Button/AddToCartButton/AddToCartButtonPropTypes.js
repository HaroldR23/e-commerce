import PropTypes from 'prop-types';

const AddToCartButtonPropTypes = {
    image: PropTypes.string.isRequired,
    numberOfProducts: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    setCloseModal: PropTypes.func.isRequired
}

export default AddToCartButtonPropTypes;
