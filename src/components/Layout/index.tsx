import React, { FC } from 'react';
import { GlobalStyle } from '../../styles/global';
import { LayoutContainer } from './styles';

const Layout: FC = ({ children }) => (
  <LayoutContainer>
    <GlobalStyle />
    {children}
  </LayoutContainer>
);

export default Layout;
