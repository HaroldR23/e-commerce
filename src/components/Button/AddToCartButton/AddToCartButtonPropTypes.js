import PropTypes from 'prop-types';

const AddToCartButtonPropTypes = {
    image: PropTypes.string.isRequired,
    numberOfProducts: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    setCloseModal: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
}

export default AddToCartButtonPropTypes;
