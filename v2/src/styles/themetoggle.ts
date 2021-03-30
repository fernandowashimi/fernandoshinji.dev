import styled, { css } from 'styled-components';

import Sun from '@/assets/sun.svg';
import Moon from '@/assets/moon.svg';

const transition = css`
  width: 24px;
  height: 24px;
  transition: all 0.3s ease-in-out;

  .sun_svg__svg-fill,
  .moon_svg__svg-fill {
    fill: ${({ theme }) => theme.colors.text.normal};
    transition: all 1s cubic-bezier(0.5, 0.5, 0, 1);
  }

  &:hover {
    opacity: 0.8;
    transition: all 0.3s ease-in-out;
  }
`;

export const SunIcon = styled(Sun)`
  ${transition};
`;

export const MoonIcon = styled(Moon)`
  ${transition};
`;

export const Button = styled.button`
  position: fixed;
  bottom: 64px;
  right: 64px;
  border: 0;
  border-radius: 16px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.background.front};
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 1s cubic-bezier(0.5, 0.5, 0, 1);

  @media screen and (max-width: 540px) {
    right: 16px;
  }

  &:hover {
    cursor: pointer;
  }
`;
