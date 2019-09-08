import React from 'react';
import {
  Segment,
  Container,
  Header,
  Divider,
  Grid,
  Card,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Index = (props: any) => {
  return (
    <Segment
      vertical={true}
      style={{
        height: '100vh',
      }}
    >
      <Container text={true}>
        <Segment>
          <Container text={true}>
            <Header textAlign="center" as="h1">
              Welcome to Kountr
            </Header>
            <Divider />
            <Grid columns={1}>
              <Grid.Column
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Link to="/host">
                  <Card centered={true} className={'Index-container-card'}>
                    <Header as="h2">Host</Header>
                  </Card>
                </Link>
              </Grid.Column>
              <Grid.Column
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Link to="/participate">
                  <Card centered={true} className={'Index-container-card'}>
                    <Header as="h2">Participate</Header>
                  </Card>
                </Link>
              </Grid.Column>
            </Grid>
          </Container>
        </Segment>
      </Container>
    </Segment>
  );
};

export default Index;
