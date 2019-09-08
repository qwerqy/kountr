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
import shortid from 'shortid';
import firebase from '../firebase';

const Host: React.SFC<any> = (props: any): JSX.Element => {
  const [kountrName, setKountrName] = useState('');

  const writeKountrData = (id: string, name: string): void => {
    firebase.database
      .ref(`kountrs/${id}`)
      .child('data')
      .set(
        {
          id,
          name,
          owner: props.uid,
          count: 0,
        },
        (error: any) => {
          if (error) {
            throw new Error(`Something went wrong writing to db: ${error}`);
          } else {
            props.history.push(`/host/${id}`);
          }
        }
      );
  };

  const handleSubmit = (): void => {
    if (kountrName) {
      const kid = shortid.generate();
      if (kid) {
        writeKountrData(kid, kountrName);
      }
    } else {
      // TODO: Create error response
    }
  };

  return (
    <>
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
                  <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                      setKountrName(e.target.value)
                    }
                  />
                </Form.Field>
              </Form>
              <Divider hidden={true} />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="huge" onClick={handleSubmit}>
                  Host {kountrName} Kountr
                </Button>
              </div>
            </Container>
          </Segment>
        </Container>
      </Segment>
    </>
  );
};

export default Host;
