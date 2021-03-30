import Link from 'next/link';
import { useRouter } from 'next/router';

import { motion } from 'framer-motion';

import { NavContainer, A } from '@/styles/nav';

export function Nav() {
  const { pathname } = useRouter();

  return (
    <NavContainer>
      {pathname !== '/' && (
        <motion.div layoutId="title-about-me">
          <Link href="/">
            <A>about me</A>
          </Link>
        </motion.div>
      )}

      {pathname !== '/contact' && (
        <motion.div layoutId="title-find-me">
          <Link href="/contact">
            <A>find me</A>
          </Link>
        </motion.div>
      )}

      {pathname !== '/projects' && (
        <motion.div layoutId="title-projects">
          <Link href="/projects">
            <A>projects</A>
          </Link>
        </motion.div>
      )}
    </NavContainer>
  );
}
