import styled from 'styled-components';
import { motion } from 'framer-motion';

export const List = styled(motion.div)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 800px;

  @media screen and (max-width: 540px) {
    padding: 0 16px;
  }
`;
