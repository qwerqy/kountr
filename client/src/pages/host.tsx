import React, { useState } from 'react';
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

const Host = (props: any) => {
  const [kountrName, setKountrName] = useState('');
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
                    What's the name of the Kountr you'd like to host?
                  </Header>
                </label>
                <input onChange={e => setKountrName(e.target.value)} />
              </Form.Field>
            </Form>
            <Divider hidden={true} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button size="huge">Host {kountrName} Kountr</Button>
            </div>
          </Container>
        </Segment>
      </Container>
    </Segment>
  );
};

export default Host;
