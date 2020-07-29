import styled from 'styled-components';

export const FormFieldInput = styled.input`
    padding: .5em;
    margin-left: 1em;
    margin-bottom: 2em;
    margin-right: 7em;
    color: var(--white);
    background-color: var(--black);
    border-color: var(--primary);
    border-radius: 4px;
    
    @media (max-width: 800px) {
        & {
            margin-right: 1em;
            display: flex;
        }
    }
`; 

export const FormFieldTextArea = styled.textarea`
    display: flex;
    padding: .5em;
    margin-left: 1em;
    margin-bottom: 2em;
    color: var(--white);
    background-color: var(--black);
    border-color: var(--primary);
    border-radius: 4px;
    
    width: 35em;
    @media (max-width: 800px) {
        & {
            width: 18em;
        }
    }
`; 