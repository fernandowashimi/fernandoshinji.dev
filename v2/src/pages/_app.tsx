import { AppProps } from 'next/app';

import { AnimateSharedLayout } from 'framer-motion';

import { ThemeProvider } from '@/providers/ThemeProvider';
import { GlobalStyle } from '@/styles/global';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </ThemeProvider>
  );
}
