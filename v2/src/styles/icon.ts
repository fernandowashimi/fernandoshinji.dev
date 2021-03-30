import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import GitHub from '@/assets/github.svg';
import Instagram from '@/assets/instagram.svg';
import LinkedIn from '@/assets/linkedin.svg';
import Mail from '@/assets/mail.svg';
import Spotify from '@/assets/spotify.svg';

const transition = css`
  width: 32px;
  height: 32px;
  transition: all 0.3s ease-in-out;

  .github_svg__svg-fill,
  .instagram_svg__svg-fill,
  .linkedin_svg__svg-fill,
  .mail_svg__svg-fill,
  .spotify_svg__svg-fill {
    fill: ${({ theme }) => theme.colors.text.normal};
    transition: all 1s cubic-bezier(0.5, 0.5, 0, 1);
  }

  &:hover {
    opacity: 0.8;
    transition: all 0.3s ease-in-out;
  }
`;

export const GitHubIcon = styled(GitHub)`
  ${transition};
`;

export const InstagramIcon = styled(Instagram)`
  ${transition};
`;

export const LinkedInIcon = styled(LinkedIn)`
  ${transition};
`;

export const MailIcon = styled(Mail)`
  ${transition};
`;

export const SpotifyIcon = styled(Spotify)`
  ${transition};
`;

export const A = styled(motion.a)`
  margin: 0 8px;
`;
