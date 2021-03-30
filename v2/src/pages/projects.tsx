import { Endpoints } from '@octokit/types';

import { Layout } from '@/components/Layout';
import { Card } from '@/components/Card';
import { getRepos } from '@/services/github';
import { getDisplayableRepos } from '@/services/local';
import { List } from '@/styles/projects';

type listForUser = Endpoints['GET /users/{username}/repos']['response'];

interface ProjectsProps {
  repos: listForUser['data'];
}

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

const item = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1, type: 'spring' } },
  hidden: { opacity: 0, scale: 0.8 },
};

export default function Projects({ repos }: ProjectsProps) {
  return (
    <Layout title="projects">
      <List initial="hidden" animate="visible" variants={list}>
        {repos.map(({ id, description, homepage, html_url, language, name }) => (
          <Card
            key={id}
            description={description}
            homepage={homepage}
            html_url={html_url}
            language={language}
            name={name}
            variants={item}
          />
        ))}
      </List>
    </Layout>
  );
}

export async function getServerSideProps() {
  let props;

  try {
    const { data: allRepos } = await getRepos();
    const { data: displayableRepos } = await getDisplayableRepos();

    const repos = allRepos.filter((r) => displayableRepos.includes(r.id));

    props = { repos };
  } catch {
    props = { repos: [] };
  }

  return { props };
}
