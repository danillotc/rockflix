import React from 'react';
import { FormFieldInput, FormFieldTextArea } from './styles'

export default ({label, input, type, name, value, onChange}) => {
    return(
        <>
            {label}:
            {input
            ?
            <FormFieldInput 
                type={type}
                name={name}
                value={value}
                onChange={onChange}/>
            :
            <FormFieldTextArea 
                type={type}
                name={name}
                value={value}
                onChange={onChange}/>
            }

        </>
    )
}