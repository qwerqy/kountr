import React, { createRef, useEffect, useState } from 'react';
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
import firebase from '../firebase';

const Participate: React.FunctionComponent = (props: any): JSX.Element => {
  const codeRef = createRef<HTMLInputElement>();
  const [kountrCode, setKountrCode] = useState('');

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.focus();
    }
  }, [codeRef]);

  const handleSubmit = (): void => {
    firebase.database
      .ref('kountrs/' + kountrCode)
      .once('value')
      .then((snapshot: firebase.database.DataSnapshot): void => {
        // Check if the Kountr exists.
        if (snapshot.val()) {
          props.history.push(`/participate/${kountrCode}`);
        } else {
          alert('The session has ended');
          // TODO: alert there is no such session that is currently live.
        }
      });
  };

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
                <Divider hidden={true} />
                <input
                  ref={codeRef}
                  style={{ textAlign: 'center' }}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    setKountrCode(e.target.value)
                  }
                />
              </Form.Field>
            </Form>
            <Divider hidden={true} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button size="huge" onClick={handleSubmit}>
                Join Kountr Session
              </Button>
            </div>
          </Container>
        </Segment>
      </Container>
    </Segment>
  );
};

export default Participate;
