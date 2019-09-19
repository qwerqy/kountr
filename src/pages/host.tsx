import React, { useState, useEffect, createRef } from 'react';
import {
  Segment,
  Container,
  Header,
  Divider,
  Form,
  Button,
  Icon,
  Input,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import firebase from '../firebase';

const Host: React.SFC<any> = (props: any): JSX.Element => {
  const nameRef = createRef<HTMLInputElement>();
  const [kountrName, setKountrName] = useState('');

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, [nameRef]);

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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container text={true}>
          <Segment className="Container">
            <Container>
              <Form size="massive">
                <Form.Field>
                  <label>
                    <Header textAlign="center" as="h3">
                      What's the name of the Kountr you'd like to host?
                    </Header>
                  </label>
                  <Divider hidden={true} />
                  <input
                    ref={nameRef}
                    style={{ textAlign: 'center' }}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                      setKountrName(e.target.value)
                    }
                  />
                </Form.Field>
              </Form>
              <Divider hidden={true} />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button color="orange" size="huge" onClick={handleSubmit}>
                  Host {kountrName} Kountr
                </Button>
              </div>
              <Divider hidden={true} />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Link to="/">
                  <span>Go Back</span>
                </Link>
              </div>
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
    </>
  );
};

export default Host;
