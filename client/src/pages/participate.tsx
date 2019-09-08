import React from 'react';
import {
  Segment,
  Container,
  Header,
  Divider,
  Form,
  Button,
  Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Participate = (props: any) => {
  return (
    <Segment
      vertical={true}
      style={{
        height: '100vh',
      }}
    >
      <Container text={true}>
        <Segment>
          <Container>
            <Link to="/">
              <div
                style={{
                  position: 'absolute',
                  // top: 10,
                  // left: 10,
                }}
              >
                <Icon name="angle left" />
                <span>Back</span>
              </div>
            </Link>
            <Header style={{ marginTop: 0 }} textAlign="center" as="h1">
              Welcome to Kountr
            </Header>
            <Divider />
            <Form size="massive">
              <Form.Field>
                <label>
                  <Header textAlign="center" as="h3">
                    Enter the unique Kountr code to participate.
                  </Header>
                </label>
                <input />
              </Form.Field>
            </Form>
            <Divider hidden={true} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button size="huge">Join Kountr</Button>
            </div>
          </Container>
        </Segment>
      </Container>
    </Segment>
  );
};

export default Participate;
