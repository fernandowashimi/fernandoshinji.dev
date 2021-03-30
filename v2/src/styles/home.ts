import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  51% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const Profile = styled.section`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding: 0 8px;
  }

  @media screen and (max-width: 320px) {
    width: 100%;
    padding: 0 8px;
  }
`;

export const Avatar = styled(motion.div)`
  img {
    border-radius: 100%;
  }

  @media screen and (max-width: 480px) {
    margin: 0 auto;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 16px;
  height: 120px;
  width: 300px;

  .Cursor {
    display: inline-block;
    color: ${({ theme }) => theme.colors.text.normal};
    font-size: 15px;

    &--blinking {
      opacity: 1;
      animation: 1s ${blink} infinite linear;
    }
  }

  @media screen and (max-width: 480px) {
    margin-left: 0;
    margin-top: 16px;
    min-height: 120px;
    width: 100%;
    min-width: 280px;
  }
`;

export const Title = styled.h1`
  display: inline-block;
  margin: 8px 2px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text.strong};
  transition: all 1s cubic-bezier(0.5, 0.5, 0, 1);
`;

export const Text = styled.p`
  display: inline-block;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.normal};
  transition: all 1s cubic-bezier(0.5, 0.5, 0, 1);
`;
