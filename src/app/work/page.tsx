import { Column, Heading } from '@/once-ui/components';
import { Meta, Schema } from '@/once-ui/modules';

import { about, person, work } from '@/app/resources/content';
import { baseURL } from '@/app/resources';

import { CtaButton } from '@/components/CtaButton';
import { Projects } from '@/components/work/Projects';

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`${baseURL}/og?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading align="center" marginTop="l" marginBottom='l' variant="display-strong-m">
        Últimos Proyectos
      </Heading>
      <Column
        align="center"
        fillWidth
        gap="m"
        marginBottom="xl"
        textVariant="body-default-l"
      >
        Algunos de los últimos proyectos personales en los que he trabajado.
      </Column>
      <Projects />
      <CtaButton
        avatar={person.avatar}
        ctaLabel={work.cta}
        id="work"
        href={work.path}
        position="center"
        marginTop="l"
        marginBottom="l"
      />
    </Column>
  );
}
