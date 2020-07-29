import styled from 'styled-components';

const Button = styled.button`
    color: var(--white);
    background: var(--black);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: color .3s, border .3s;
    
    &:hover,
    &:focus {
    color: var(--primary);
    border: 1px solid var(--primary);
    }

    @media (max-width: 800px) {
        & {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--primary);
        border-radius: 0;
        border: 0;
        text-align: center;
        }
    }
`;

export default Button;