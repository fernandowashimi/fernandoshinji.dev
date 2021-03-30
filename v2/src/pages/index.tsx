import Image from 'next/image';

import { Endpoints } from '@octokit/types';
import Typist from 'react-typist';

import { Layout } from '@/components/Layout';
import { getProfile } from '@/services/github';
import { getDefaultProfile } from '@/services/local';
import { Avatar, Profile, InfoContainer, Title, Text } from '@/styles/home';

type getByUsername = Endpoints['GET /users/{username}']['response'];

interface HomeProps {
  profile: getByUsername['data'];
}

export default function Home({ profile }: HomeProps) {
  return (
    <Layout title="about me">
      <Profile>
        <Avatar
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={profile.avatar_url}
            alt={profile.name || profile.login}
            width={120}
            height={120}
            layout="fixed"
          />
        </Avatar>

        <InfoContainer>
          <Typist
            avgTypingDelay={30}
            cursor={{
              show: true,
              blink: true,
              element: '▍',
            }}
          >
            <Title>{profile.name}</Title>
            <Typist.Delay ms={500} />
            <br />

            <Text>🗺️ {profile.location}</Text>
            <Typist.Delay ms={200} />
            <br />

            <Text>📝 {profile.bio}</Text>
            <Typist.Delay ms={200} />
            <br />

            <Text>🏢 {profile.company}</Text>
          </Typist>
        </InfoContainer>
      </Profile>
    </Layout>
  );
}

export async function getServerSideProps() {
  let props;

  try {
    const { data: profile } = await getProfile();

    props = { profile };
  } catch {
    const { data: profile } = await getDefaultProfile();

    props = { profile };
  }

  return { props };
}
