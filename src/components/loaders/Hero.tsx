import { Column, Row, Skeleton, Flex } from '@/once-ui/components';

export const HeroSkeleton = () => {
  return (
    <Column fillWidth paddingY="24" gap="m">
      <Column maxWidth="s">
        {/* Badge */}
        <Flex
          fillWidth
          horizontal="start"
          paddingTop="16"
          paddingBottom="32"
          paddingLeft="12"
        >
          <Skeleton height="s" width="m" shape="line" />
        </Flex>

        {/* Heading */}
        <Flex fillWidth horizontal="start" paddingBottom="16">
          <Skeleton height="m" width="l" shape="line" />
        </Flex>

        {/* Subline */}
        <Flex fillWidth horizontal="start" paddingBottom="32">
          <Skeleton height="m" width="l" shape="line" />
        </Flex>

        {/* CTA */}
        <Flex paddingLeft="12" paddingTop="12" horizontal="start">
          <Row gap="8" vertical="center">
            <Skeleton shape="circle" width="l" height="l" />
            <Skeleton height="s" width="m" shape="line" />
          </Row>
        </Flex>
      </Column>
    </Column>
  );
};
