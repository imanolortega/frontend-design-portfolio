'use client';

import { about } from '@/app/resources';
import { Column, Heading, Row, Text } from '@/once-ui/components';
import { useIsMobile } from '@/once-ui/hooks/useIsMobile';
import React from 'react';

export default function TechInfo() {
  const isMobile = useIsMobile();

  return (
    <>
      <Heading
        as="h2"
        id={about.technical.title}
        variant="display-strong-s"
        marginBottom="40"
      >
        {about.technical.title}
      </Heading>
      <Row gap="l" wrap marginBottom="xl">
        {isMobile ? (
          <Column gap="l">
            {about.technical.skills.map((skill, index) => (
              <Text key={`${skill.title}-${index}`} variant="body-default-m">
                - {skill.title}
              </Text>
            ))}
          </Column>
        ) : (
          Array.from({
            length: Math.ceil(about.technical.skills.length / 3),
          }).map((_, colIndex) => {
            const start = colIndex * 4;
            const end = start + 4;
            const group = about.technical.skills.slice(start, end);

            return (
              <Column key={colIndex} gap="l">
                {group.map((skill, index) => (
                  <Text
                    key={`${skill.title}-${index}`}
                    variant="body-default-m"
                  >
                    - {skill.title}
                  </Text>
                ))}
              </Column>
            );
          })
        )}
      </Row>
    </>
  );
}
