'use client';

import {
  Flex,
  IconButton,
  SmartLink,
  Text,
} from '@/once-ui/components';
import { person, social } from '@/app/resources/content';
import { useLoadingDelay } from '@/app/utils/useLoadingDelay';
import styles from './Footer.module.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const loading = useLoadingDelay(3000);

  return (
    <Flex
      as="footer"
      className={styles['footer']}
      fillWidth
      padding="8"
      horizontal="center"
      mobileDirection="column"
    >
      {loading ? (
        <div></div>
      ) : (
        <Flex
          className={styles.mobile}
          maxWidth="m"
          paddingY="8"
          paddingX="16"
          gap="16"
          horizontal="space-between"
          vertical="center"
        >
          <Text variant="body-default-s" onBackground="neutral-strong">
            <Text onBackground="neutral-weak">© {currentYear} /</Text>
            <Text paddingX="4">{person.name}</Text>
            <Text onBackground="neutral-weak">
              / Desarrollado con{' '}
              <SmartLink href="https://nextjs.org/docs">Next.js</SmartLink> y{' '}
              <SmartLink href="https://once-ui.com/templates/magic-portfolio">
                Once UI
              </SmartLink>
            </Text>
          </Text>
          <Flex gap="16">
            {social.map(
              (item) =>
                item.link && (
                  <IconButton
                    key={item.name}
                    href={item.link}
                    icon={item.icon}
                    tooltip={item.name}
                    size="s"
                    variant="ghost"
                  />
                ),
            )}
          </Flex>
        </Flex>
      )}
      <Flex height="80" show="s"></Flex>
    </Flex>
  );
};
