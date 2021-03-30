import Head from 'next/head';

import { motion } from 'framer-motion';

import { Nav } from '@/components/Nav';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LayoutContainer, Header, Title, Main } from '@/styles/layout';

export function Layout({ children, title }: Layout.Props) {
  return (
    <LayoutContainer>
      <Head>
        <title>Fernando Shinji</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header>
        <motion.div layoutId={`title-${title.replace(' ', '-')}`}>
          <Title>{title}</Title>
        </motion.div>
      </Header>

      <Main>{children}</Main>

      <ThemeToggle />

      <Nav />
    </LayoutContainer>
  );
}
