import React from 'react';
import {
  Segment,
  Container,
  Header,
  Divider,
  Grid,
  Card,
} from 'semantic-ui-react';

const Index = (props: any) => {
  return (
    <div className={'Index-wrapper'}>
      <Segment className={'Index-center-container'}>
        <Container text={true}>
          <Header textAlign="center" as="h1">
            Welcome to Kountr
          </Header>
          <Divider />
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Card centered={true} className={'Index-container-card'}>
                  <Header as="h2">Host</Header>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card centered={true} className={'Index-container-card'}>
                  <Header as="h2">Participate</Header>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
};

export default Index;
