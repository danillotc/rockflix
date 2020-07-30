import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldInput, FormFieldTextArea } from './styles';

function FormField({
  label, input, type, name, value, onChange,
}) {
  return (
    <>
      {label}
      :
      {input
        ? (
          <FormFieldInput
            type={type}
            name={name}
            value={value}
            onChange={onChange}
          />
        )
        : (
          <FormFieldTextArea
            type={type}
            name={name}
            value={value}
            onChange={onChange}
          />
        )}

    </>

  );
}

export default FormField;

FormField.defaultProps = {
  value: '',
  type: 'text',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.bool.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
