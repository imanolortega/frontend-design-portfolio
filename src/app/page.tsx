import React from 'react';

import {
  Badge,
  Column,
  Heading,
  RevealFx,
  Row,
  Text,
} from '@/once-ui/components';
import { Meta, Schema } from '@/once-ui/modules';

import { baseURL } from '@/app/resources';
import { home, about, person, work } from '@/app/resources/content';

import { CtaButton } from '@/components/CtaButton';
import { Projects } from '@/components/work/Projects';

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`${baseURL}/og?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <head>
        {/* Meta tags fix to LinkedIn Preview */}
        <title>{home.title}</title>
        <meta name="description" content={home.description} />
        <meta name="canonical" content={`${baseURL}${home.path}`} />
        <meta
          name="image"
          property="og:image"
          content="/images/og/cover-imanol-ortega.jpg"
        />
        <meta name="og:title" content={home.title} />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content={home.title} />
        <meta name="og:description" content={home.description} />
        <meta name="og:image" content={`${baseURL}${home.image}`} />
        <meta name="og:image:alt" content={`${person.name}'s portfolio.`} />
        <meta name="og:url" content={`${baseURL}${home.path}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={home.description} />
        <meta name="twitter:description" content={home.description} />
        <meta name="twitter:image" content={`${baseURL}${home.image}`} />
        {/*  */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'system';
                  const root = document.documentElement;
                  if (theme === 'system') {
                    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    root.setAttribute('data-theme', isDark ? 'dark' : 'light');
                  } else {
                    root.setAttribute('data-theme', theme);
                  }
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <Column fillWidth paddingY="24" gap="m">
        <Column maxWidth="s">
          {home.featured && (
            <RevealFx
              fillWidth
              horizontal="start"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx
            translateY="4"
            fillWidth
            horizontal="start"
            paddingBottom="16"
          >
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx
            translateY="8"
            delay={0.2}
            fillWidth
            horizontal="start"
            paddingBottom="32"
          >
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
            >
              {home.subline}
            </Text>
          </RevealFx>
          <CtaButton
            avatar={person.avatar}
            ctaLabel={about.cta}
            href={about.path}
            id="about"
            paddingLeft="12"
            paddingTop="12"
            position="start"
          />
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 2]} />
      </RevealFx>
      <CtaButton
        avatar={person.avatar}
        ctaLabel={work.cta}
        id="work"
        href={work.path}
        position="center"
        marginBottom="l"
      />
    </Column>
  );
}
