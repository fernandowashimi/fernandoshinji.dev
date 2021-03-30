import React, { FC, HTMLAttributes } from 'react';
import { SectionContainer } from './styles';

const Section: FC<HTMLAttributes<HTMLElement>> = ({ children, ...rest }) => (
  <SectionContainer {...rest}>{children}</SectionContainer>
);

export default Section;
