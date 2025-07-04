import '@/once-ui/styles/index.scss';
import '@/once-ui/tokens/index.scss';

import classNames from 'classnames';

import { Footer, Header, RouteGuard } from '@/components';
import { baseURL, effects, style, font, person } from '@/app/resources';

import {
  Background,
  Column,
  Flex,
  ThemeProvider,
  ToastProvider,
} from '@/once-ui/components';
import { opacity, SpacingToken } from '@/once-ui/types';
import CustomAnalytics from '@/components/custom-analytics/CustomAnalytics';
import { MetaTags } from '@/components/metatags/Metatags';

const title = "Work | Imanol Ortega";
const description = "Descubrí los proyectos y trabajos de Imanol Ortega.";
const path = "/work";
const image = `${baseURL}/images/work-preview.jpg`;

export const metadata = {
  title,
  description,
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      background="page"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
      className={classNames(
        font.primary.variable,
        font.secondary.variable,
        font.tertiary.variable,
        font.code.variable,
      )}
    >
      <head>
        <MetaTags
          title={title}
          description={description}
          image={image}
          url={`${baseURL}${path}`}
          imageAlt={`${person.name}'s work section`}
        />
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
      <CustomAnalytics />
      <ThemeProvider>
        <ToastProvider>
          <Column
            style={{ minHeight: '100vh' }}
            as="body"
            fillWidth
            margin="0"
            padding="0"
          >
            <Background
              position="fixed"
              mask={{
                x: effects.mask.x,
                y: effects.mask.y,
                radius: effects.mask.radius,
                cursor: effects.mask.cursor,
              }}
              gradient={{
                display: effects.gradient.display,
                opacity: effects.gradient.opacity as opacity,
                x: effects.gradient.x,
                y: effects.gradient.y,
                width: effects.gradient.width,
                height: effects.gradient.height,
                tilt: effects.gradient.tilt,
                colorStart: effects.gradient.colorStart,
                colorEnd: effects.gradient.colorEnd,
              }}
              dots={{
                display: effects.dots.display,
                opacity: effects.dots.opacity as opacity,
                size: effects.dots.size as SpacingToken,
                color: effects.dots.color,
              }}
              grid={{
                display: effects.grid.display,
                opacity: effects.grid.opacity as opacity,
                color: effects.grid.color,
                width: effects.grid.width,
                height: effects.grid.height,
              }}
              lines={{
                display: effects.lines.display,
                opacity: effects.lines.opacity as opacity,
                size: effects.lines.size as SpacingToken,
                thickness: effects.lines.thickness,
                angle: effects.lines.angle,
                color: effects.lines.color,
              }}
            />
            <Flex fillWidth minHeight="16" hide="s"></Flex>
            <Header />
            <Flex
              zIndex={0}
              fillWidth
              paddingY="l"
              paddingX="l"
              horizontal="center"
              flex={1}
            >
              <Flex horizontal="center" fillWidth minHeight="0">
                <RouteGuard>{children}</RouteGuard>
              </Flex>
            </Flex>
            <Footer />
          </Column>
        </ToastProvider>
      </ThemeProvider>
    </Flex>
  );
}
