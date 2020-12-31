import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    min: PropTypes.number,
    max: PropTypes.number,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    min: null,
    max: null,
    placeholder: '',
    disabled: false,
}

function InputField(props) {
    const {
        field, min, max,
        type, label, placeholder, disabled
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
            />
        </FormGroup>
    );
}

export default InputField;