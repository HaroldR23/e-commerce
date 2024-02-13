
import PropTypes from 'prop-types';

const AddRemoveItemPropTypes = {
    handleAddItem: PropTypes.func.isRequired,
    handleRemoveItem: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
}

export default AddRemoveItemPropTypes;
