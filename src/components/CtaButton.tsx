import React from 'react';
import { RevealFx, Button, Flex, Avatar } from '@/once-ui/components';
import { SpacingToken } from '@/once-ui/types';

interface CtaButtonProps {
  avatar?: string | null;
  ctaLabel: string;
  href: string;
  id: string;
  marginTop?: SpacingToken;
  marginBottom?: SpacingToken;
  paddingLeft?: SpacingToken;
  paddingTop?: SpacingToken;
  position?: 'start' | 'center' | 'end';
}

export function CtaButton({
  avatar,
  ctaLabel,
  href,
  id,
  marginBottom = '0',
  marginTop= '0',
  paddingLeft = '0',
  paddingTop = '0',
  position = 'center',
}: CtaButtonProps) {
  return (
    <RevealFx
      delay={0.4}
      horizontal={position}
      marginBottom={marginBottom}
      marginTop={marginTop}
      paddingLeft={paddingLeft}
      paddingTop={paddingTop}
    >
      <Button
        arrowIcon
        data-border="rounded"
        href={href}
        id={id}
        size="m"
        variant="secondary"
      >
        <Flex gap="8" vertical="center">
          {avatar && (
            <Avatar
              style={{ marginLeft: '-0.75rem', marginRight: '0.25rem' }}
              src={avatar}
              size="m"
            />
          )}
          {ctaLabel}
        </Flex>
      </Button>
    </RevealFx>
  );
}
