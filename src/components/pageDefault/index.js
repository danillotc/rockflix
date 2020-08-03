import React from 'react';
import Menu from '../menu';
import Footer from '../Footer';
import styled from 'styled-components'; 

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 20px;
    padding-left: 5%;
    padding-right: 5%
`;

export default ({ children }) => {
    return (
        <>
            <Menu/>
                <Main>
                    {children}
                </Main>
            <Footer/>
        </>
    )
}
