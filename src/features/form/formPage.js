import React from 'react';
import PropTypes from 'prop-types';
import { FastField, Form, Formik } from 'formik';
import { Button, FormGroup} from 'reactstrap';
import InputField from './inputField';

FormPage.propTypes = {
    onSubmit: PropTypes.func,
};

FormPage.defaultProps = {
    onSubmit: null,
};

function FormPage(props) {
    const { initialValues, isAddMode } = props;
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={props.onSubmit}
        >
        {formikProps => {
            return (
                <Form>
                    <FastField
                        name="id"
                        type="number"
                        component={InputField}

                        label="Id"
                        placeholder="Enter Id..."
                        disabled={isAddMode ? false : true}
                    />
                    <FastField
                        name="name"
                        component={InputField}

                        label="Name"
                        placeholder="Enter name..."
                    />
                    <FastField
                        name="age"
                        type="number"
                        min="18"
                        max="60"
                        component={InputField}

                        label="Age"
                        placeholder="Enter age..."
                    />

                    <FormGroup>
                        <Button type="submit" color='primary'>
                            Lưu
                    </Button>
                    </FormGroup>
                </Form>
            )
        }}
        </Formik>
    );
}

export default FormPage;