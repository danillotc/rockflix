import React from 'react';
import styled, { css } from 'styled-components';
import Menu from '../menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 20px;
    padding-left: 5%;
    padding-right: 5%;
    ${({ paddingHome }) => css`
        padding: ${paddingHome}
    `}
`;

// eslint-disable-next-line react/prop-types
export default ({ children, paddingHome }) => (
  <>
    <Menu />
    <Main paddingHome={paddingHome}>
      {children}
    </Main>
    <Footer />
  </>
);
