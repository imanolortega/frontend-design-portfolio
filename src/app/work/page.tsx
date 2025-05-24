import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  RevealFx,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { about, person, work } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import { Projects } from "@/components/work/Projects";
import { CtaButton } from "@/components/CtaButton";

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
        marginBottom="l"
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
