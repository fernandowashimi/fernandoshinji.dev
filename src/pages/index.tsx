import React, { FC } from 'react';

import Layout from '../components/Layout';
import Section from '../components/Section';
import LogoMouseParallax from '../components/LogoMouseParallax';

const App: FC = () => (
  <Layout>
    <Section>
      <LogoMouseParallax />
    </Section>
  </Layout>
);

export default App;
