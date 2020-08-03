import React, { FC } from 'react';
import { useSpring, animated } from 'react-spring';

import { LogoMouseParallaxContainer } from './styles';
import Logo from '../Logo';
import Hexagon from '../../images/hexagon_flat.svg';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 50}px, ${y / 50}px, 0)`;
const trans2 = (x, y) => `translate3d(${x / 100}px, ${y / 100}px, 0)`;

const MouseParallax: FC = () => {
  const [prop, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 500, friction: 100 },
  }));

  return (
    <LogoMouseParallaxContainer
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        /* @ts-ignore */
        style={{ opacity: '.9', transform: prop.xy.interpolate(trans2) }}
      >
        <img src={Hexagon} width={300} alt="Hexagon" />
      </animated.div>
      <animated.div
        /* @ts-ignore */
        style={{ transform: prop.xy.interpolate(trans1) }}
      >
        <Logo />
      </animated.div>
    </LogoMouseParallaxContainer>
  );
};

export default MouseParallax;
