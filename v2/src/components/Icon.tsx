import { ReactNode } from 'react';

import { HTMLMotionProps } from 'framer-motion';

import { A, GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon, SpotifyIcon } from '@/styles/icon';

const IconType: Application.Map<ReactNode> = {
  github: <GitHubIcon />,
  instagram: <InstagramIcon />,
  linkedin: <LinkedInIcon />,
  mail: <MailIcon />,
  spotify: <SpotifyIcon />,
};

export function Icon({ url, icon, ...props }: Icon.Props & HTMLMotionProps<'a'>) {
  return (
    <A href={url} target="_blank" rel="noreferrer" {...props}>
      {IconType[icon]}
    </A>
  );
}
