import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  RevealFx,
  Text,
} from '@/once-ui/components';
import { baseURL } from '@/app/resources';
import { about, person, work } from '@/app/resources/content';
import { Meta, Schema } from '@/once-ui/modules';
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
      <Heading align="center" marginBottom="l" variant="display-strong-s">
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
      <RevealFx
        marginTop="l"
        marginBottom="xl"
        delay={0.4}
        horizontal="center"
        paddingLeft="12"
      >
        <Button
          id="about"
          data-border="rounded"
          href="https://github.com/imanolortega"
          variant="secondary"
          size="m"
          arrowIcon
        >
          <Flex gap="8" vertical="center">
            {about.avatar.display && (
              <Avatar
                style={{ marginLeft: '-0.75rem', marginRight: '0.25rem' }}
                src={person.avatar}
                size="m"
              />
            )}
            Ver más proyectos
          </Flex>
        </Button>
      </RevealFx>
    </Column>
  );
}
