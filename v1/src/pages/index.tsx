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
      {/* temporary */}
      <div className="contact">
        <span>
          <a href="https://github.com/fernandowashimi">Github</a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/fernandowashimi/">LinkedIn</a>
        </span>
        <span>
          <a href="mailto:fernandowashimi@gmail.com">Email</a>
        </span>
      </div>
    </Section>
  </Layout>
);

export default App;
