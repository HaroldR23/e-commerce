import PropTypes from 'prop-types';

const CardPropTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired
}

export default CardPropTypes;
