import PropTypes from 'prop-types';
import taxPropTypes from '@components/taxPropTypes';

const propTypes = {
    /** The selected tax rate of an expense */
    selectedTaxRate: PropTypes.string,

    /* Onyx Props */
    /** Collection of tax rates attached to a policy */
    policyTaxRates: taxPropTypes,


    /** Callback to fire when a tax is pressed */
    onSubmit: PropTypes.func.isRequired,
};

const defaultProps = {
    selectedTaxRate: '',
    policyTaxRates: {},
};

export {propTypes, defaultProps};
