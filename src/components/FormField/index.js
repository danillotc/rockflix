import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldInput, FormFieldTextArea } from './styles';

function FormField({
  label, input, type, name, value, onChange, suggestions, maxLength,
}) {
  const hasSuggestions = Boolean(suggestions.length);

  return (
    <>
      {label}
      :
      {input
        ? (
          <>
            <FormFieldInput
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              maxLength={maxLength}
              autoComplete={hasSuggestions ? 'off' : 'on'}
              list={hasSuggestions ? 'suggestions' : ''}
            />

            {
            hasSuggestions
            && (
              <datalist id="suggestions">
                {suggestions.map((suggestion) => (
                  <option value={suggestion} key={suggestion}>
                    {suggestion}
                  </option>
                ))}
              </datalist>
            )
            }
          </>
        )
        : (
          <FormFieldTextArea
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder="Máximo de 70 caracteres"
            maxLength={70}
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
  suggestions: [],
  maxLength: 20,
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.bool.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
  maxLength: PropTypes.number,
};
