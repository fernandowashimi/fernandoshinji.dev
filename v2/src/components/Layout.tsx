import Head from 'next/head';

import { motion } from 'framer-motion';

import { Nav } from '@/components/Nav';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LayoutContainer, Header, Title, Main } from '@/styles/layout';

export function Layout({ children, title }: Layout.Props) {
  return (
    <LayoutContainer>
      <Head>
        <title>// Fernando Shinji</title>
        <meta name="author" content="Fernando Shinji Washimi" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Personal website by Fernando Shinji Washimi." />
        <meta property="og:url" content="https://fernandoshinji.dev" />
        <meta property="og:title" content="// Fernando Shinji" />
        <meta property="og:site_name" content="Fernando Shinji" />
        <meta property="og:description" content="Personal website by Fernando Shinji Washimi." />
        <meta property="og:image" content="https://fernandoshinji.dev/logo.svg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="571" />
        <meta property="og:image:height" content="500" />
        <meta property="og:type" content="website" />
        <meta charSet="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
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
