import PropTypes from 'prop-types';

const CartItemPropTypes = {
    productImg: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    numberOfProducts: PropTypes.number.isRequired
}

export default CartItemPropTypes;
