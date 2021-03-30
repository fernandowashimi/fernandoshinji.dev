import styled from 'styled-components';

export const LogoMouseParallaxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  .parallax-item {
    position: absolute;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;

    &__back {
      width: 300px;
      height: 260px;

      background-image: url(./hexagon.png);
      background-size: cover;

      opacity: 0.3;
    }

    &__logo {
      width: 260px;
      height: 300px;

      background-image: url(./logo.png);
      background-size: cover;
    }
  }
`;
