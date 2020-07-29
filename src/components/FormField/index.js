import React from 'react';

export default ({label, type, name, value, onChange}) => {
    return(
        <div>
            {label}:
            <input 
                type={type}
                name={name}
                value={value}
                onChange={onChange}/>
        </div>
    )
}