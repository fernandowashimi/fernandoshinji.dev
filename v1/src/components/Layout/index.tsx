import React, { FC } from 'react';
import Particles from 'react-particles-js';

import { GlobalStyle } from '../../styles/global';
import { LayoutContainer } from './styles';

const Layout: FC = ({ children }) => (
  <LayoutContainer>
    <Particles
      style={{
        position: 'absolute',
      }}
      params={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 1,
            direction: 'none',
            out_mode: 'out',
          },
        },
        interactivity: {
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0,
            },
          },
        },
      }}
    />
    <GlobalStyle />
    {children}
  </LayoutContainer>
);

export default Layout;
