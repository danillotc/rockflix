import styled from 'styled-components';

export const FormFieldInput = styled.input`
    padding: .5em;
    margin-left: 1em;
    margin-bottom: 2em;
    margin-right: 6.6em;
    color: var(--white);
    background-color: var(--black);
    border-color: var(--primary);
    border-radius: 4px;
    
    @media (max-width: 800px) {
        & {
            display: flex;
        }
        &:not([type="color"]) {
            width: 20em;
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
    
    width: 30em;
    @media (max-width: 800px) {
        & {
            width: 18em;
        }
    }
`;
