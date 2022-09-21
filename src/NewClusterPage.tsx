import * as React from 'react';
import Helmet from 'react-helmet';
import {
  Page,
  PageSection,
  Text,
  TextContent,
  Title,
} from '@patternfly/react-core';

export default function NewClusterPage() {
  return (
    <>
      <Helmet>
        <title>NewClusterPage</title>
      </Helmet>
      <Page>
        <PageSection variant="light">
          <Title headingLevel="h1">NewClusterPage</Title>
        </PageSection>
        <PageSection variant="light">
          <TextContent>
            <Text component="p">Nice! Your NewClusterPage is working.</Text>
            <Text component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              expedita voluptatem minima commodi fugit incidunt quasi,
              asperiores distinctio id nulla eius placeat error natus vel
              facilis dolores maxime libero! Ipsa?
            </Text>
          </TextContent>
        </PageSection>
      </Page>
    </>
  );
}
