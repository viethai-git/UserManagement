import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    min: PropTypes.string,
    max: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.string,
};

InputField.defaultProps = {
    type: '',
    label: '',
    min: '',
    max: '',
    placeholder: '',
    disabled: false,
    required: '',
}

function InputField(props) {
    const {
        field, min, max,
        type, label, placeholder, disabled, required
    } = props;
    const { name } = field;
    return (
        <FormGroup>
            {label && <Label for={name} style={{textAlign:"left"}}>{label}</Label>}
            <br/>
            <Input
                id={name}
                {...field}

                type={type}
                min={min}
                max={max}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
            />
        </FormGroup>
    );
}

export default InputField;