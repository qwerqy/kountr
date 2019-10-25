import React from 'react';
import {
  Segment,
  Container,
  Header,
  Divider,
  Grid,
  Card,
} from 'semantic-ui-react';
import Logo from '../images/logo.png';
const Index = (props: any): JSX.Element => {
  return (
    <Segment
      vertical={true}
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container text={true}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={Logo} className={'Header-image'} />
        </div>
        <Header
          textAlign="center"
          className="Hero-title"
          as="h1"
          style={{
            fontSize: '5rem',
            marginBottom: '5rem',
            fontWeight: 400,
          }}
        >
          Welcome to <span style={{ color: 'white' }}>Kountr</span>
          <Header.Subheader className="Hero-title-subtitle">
            Counter as a Service
          </Header.Subheader>
        </Header>
        <Segment className="Index-container">
          <Container>
            {/* <Divider /> */}
            <Grid columns={2} stackable={true}>
              <Grid.Column
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Card
                  fluid={true}
                  centered={true}
                  className={'Index-container-card'}
                  onClick={(): void => props.history.push('/host')}
                >
                  <Header as="h2">Host</Header>
                </Card>
              </Grid.Column>
              <Grid.Column
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Card
                  fluid={true}
                  centered={true}
                  className={'Index-container-card'}
                  onClick={(): void => props.history.push('/participate')}
                >
                  <Header as="h2">Participate</Header>
                </Card>
              </Grid.Column>
            </Grid>
          </Container>
        </Segment>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <a href="https://aminroslan.com" target="_blank">
            aminroslan.com
          </a>
        </div>
      </Container>
    </Segment>
  );
};

export default Index;
