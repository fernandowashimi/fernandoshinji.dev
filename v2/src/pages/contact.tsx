import { Layout } from '@/components/Layout';
import { Icon } from '@/components/Icon';
import { List } from '@/styles/contact';

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
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 5 },
};

export default function Contact() {
  return (
    <Layout title="find me">
      <List initial="hidden" animate="visible" variants={list}>
        <Icon url="https://github.com/fernandowashimi" icon="github" variants={item} />
        <Icon url="https://www.instagram.com/feshinji" icon="instagram" variants={item} />
        <Icon url="https://www.linkedin.com/in/fernandowashimi" icon="linkedin" variants={item} />
        <Icon url="mailto:fernandowashimi@gmail.com" icon="mail" variants={item} />
        <Icon url="https://open.spotify.com/user/fernandowashimi" icon="spotify" variants={item} />
      </List>
    </Layout>
  );
}
