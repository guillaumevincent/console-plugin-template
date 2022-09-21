import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Helmet from 'react-helmet';
import {
  Bullseye,
  Button,
  ButtonVariant,
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  Page,
  PageSection,
  PageSectionVariants,
  Text,
  TextContent,
  Title,
} from '@patternfly/react-core';
import { AddCircleOIcon } from '@patternfly/react-icons';

let routeBasePath = '/assisted-installer';

export default function ClustersPage() {
  let history = useHistory();

  return (
    <>
      <Helmet>
        <title>ClustersPage</title>
      </Helmet>
      <Page>
        <PageSection variant="light">
          <Title headingLevel="h1">ClustersPage</Title>
        </PageSection>
        <PageSection variant="light">
          <TextContent>
            <Text component="p">Nice! Your ClustersPage is working.</Text>
            <PageSection variant={PageSectionVariants.light} isFilled>
              <Bullseye>
                <EmptyState>
                  <EmptyStateIcon icon={AddCircleOIcon} />
                  <Title headingLevel="h2">Create new assisted cluster</Title>
                  <EmptyStateBody>
                    There are no clusters yet. This wizard is going to guide you
                    through the OpenShift cluster deployment.
                  </EmptyStateBody>
                  <Button
                    variant={ButtonVariant.primary}
                    onClick={() =>
                      history.push(`${routeBasePath}/clusters/~new`)
                    }
                    id="empty-state-new-cluster-button"
                    data-ouia-id="button-create-new-cluster"
                  >
                    Create New Cluster
                  </Button>
                </EmptyState>
              </Bullseye>
            </PageSection>
          </TextContent>
        </PageSection>
      </Page>
    </>
  );
}
