import styled from 'styled-components';

export const NavContainer = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: row;
  bottom: 64px;

  @media screen and (max-width: 540px) {
    position: fixed;
    justify-content: space-evenly;
    width: 100%;
    padding: 16px 0;
    background-color: ${({ theme }) => theme.colors.background.back};
    box-shadow: 0px 0 8px rgba(0, 0, 0, 0.2);
    bottom: 0;
    transition: all 1s cubic-bezier(0.5, 0.5, 0, 1);
  }
`;

export const A = styled.a`
  position: relative;
  margin: 0 16px;
  color: ${({ theme }) => theme.colors.text.weak};
  transition: all 1s cubic-bezier(0.5, 0.5, 0, 1);

  &:hover {
    cursor: pointer;
  }

  &::after {
    content: '👈';
    position: absolute;
    top: -4px;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }
`;
