import Image from 'next/image';

import { HTMLMotionProps } from 'framer-motion';

import {
  Container,
  DescriptionContainer,
  Description,
  Name,
  Tag,
  TagEmoji,
  A,
  ExternalLinkIcon,
  CardHeader,
} from '@/styles/card';

export function Card({
  description,
  homepage,
  html_url,
  language,
  name,
  ...props
}: Card.Props & HTMLMotionProps<'div'>) {
  return (
    <Container {...props}>
      <CardHeader>
        <Name>📂 {name}</Name>
        <A href={html_url} target="_blank" rel="noreferrer">
          <Image src="/github.svg" width={26} height={26} />
        </A>
      </CardHeader>

      {description && (
        <DescriptionContainer>
          <Description>{description}</Description>
        </DescriptionContainer>
      )}

      {homepage && (
        <A href={homepage} target="_blank" rel="noreferrer">
          {homepage} <ExternalLinkIcon />
        </A>
      )}

      {language && (
        <Tag>
          <TagEmoji>🔵</TagEmoji> {language}
        </Tag>
      )}
    </Container>
  );
}
