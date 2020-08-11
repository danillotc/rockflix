import styled from 'styled-components';

export const CategoryList = styled.table`
    border-collapse: collapse;
    margin-bottom: 2rem;
    padding: 0;
    width: 100%;

    caption {
        font-weight: bold;
        padding-top: 1rem;
        padding-bottom: 2rem;
    }

    td, th {
        border: 1px solid var(--white);
        border-color: var(--primary);
        padding: 5px;
        text-align: center;
    }
`;

export const SmallButton = styled.button`
    background: var(--black);
    border: 1px solid var(--white);
    border-radius: 5px;
    box-sizing: border-box;
    color: var(--white);
    cursor: pointer;
    font-style: normal;
    margin-left: 15px;
    margin-right: 15px;
    outline: none;
    padding: 8px 12px;
    text-decoration: none;
    transition: color .3s, border .3s;
    width: 100px;
    
    &:hover,
    &:focus {
    border: 1px solid var(--primary);
    color: var(--primary);
    }

    @media (max-width: 800px) {
        width: 70px
    }
`;
