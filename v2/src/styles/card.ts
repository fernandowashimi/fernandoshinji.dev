import styled from 'styled-components';
import { motion } from 'framer-motion';

import ExternalLink from '@/assets/external-link.svg';

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.front};
  border-radius: 16px;
  padding: 16px;
  width: calc(50% - 16px);
  margin: 8px;
  transition: all 1s cubic-bezier(0.5, 0.5, 0, 1);

  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;

export const Name = styled.h1`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.strong};
  margin-bottom: 8px;
  transition: all 1s cubic-bezier(0.5, 0.5, 0, 1);
`;

export const DescriptionContainer = styled.div`
  flex-grow: 1;
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.normal};
  margin-bottom: 8px;
  transition: all 1s cubic-bezier(0.5, 0.5, 0, 1);
`;

export const Tag = styled.span`
  font-size: 14px;
  width: fit-content;
  display: inline-block;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background.back};
  color: ${({ theme }) => theme.colors.text.weak};
  transition: all 1s cubic-bezier(0.5, 0.5, 0, 1);
`;

export const TagEmoji = styled.span`
  font-size: 12px;
`;

export const A = styled.a`
  font-size: 14px;
  margin-bottom: 8px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.link};
  transition: all 1s cubic-bezier(0.5, 0.5, 0, 1);

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const ExternalLinkIcon = styled(ExternalLink)`
  width: 12px;
  height: 12px;
  fill: ${({ theme }) => theme.colors.text.link};
  transition: all 1s cubic-bezier(0.5, 0.5, 0, 1);
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
