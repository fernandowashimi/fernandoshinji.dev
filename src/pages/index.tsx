import React, { FC } from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import LogoMouseParallax from '../components/LogoMouseParallax';

const App: FC = () => (
  <Layout>
    <SEO title="Welcome" />
    <Section>
      <LogoMouseParallax />
    </Section>
  </Layout>
);

export default App;
