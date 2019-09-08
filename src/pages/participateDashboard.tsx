import React, { useState, useEffect } from 'react';
import {
  Segment,
  Container,
  Header,
  Divider,
  Icon,
  Input,
  Grid,
  Button,
} from 'semantic-ui-react';
import firebase from '../firebase';

const ParticipateDashboard: React.SFC<any> = (props: any): JSX.Element => {
  const [count, setCount] = useState(0);
  const [kountrName, setKountrName] = useState('');
  const kid = props.match.params.id;

  useEffect(() => {
    const KountrCountRef = firebase.database.ref(
      'kountrs/' + kid + '/data/count'
    );

    KountrCountRef.on(
      'value',
      (snapshot: firebase.database.DataSnapshot): void => {
        setCount(snapshot.val());
      }
    );

    firebase.database
      .ref('kountrs/' + kid)
      .once('value')
      .then((snapshot: firebase.database.DataSnapshot): void => {
        // Check if the Kountr exists.
        if (snapshot.val()) {
          setKountrName(snapshot.val().data.name);
        } else {
          props.history.push('/');
        }
      });
  }, [kid, props.history, props.uid]);

  const handleKount = (): void => {
    firebase.database
      .ref(`kountrs/${kid}`)
      .child('data')
      .update(
        {
          count: count + 1,
        },
        (error: any) => {
          if (error) {
            throw new Error(`Something went wrong removeing from db: ${error}`);
          }
        }
      );
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
              <Header style={{ marginTop: 0 }} textAlign="center" as="h1">
                Welcome to Kountr
              </Header>
              <Divider />
              <Grid columns={2}>
                <Grid.Row>
                  <Grid.Column>
                    <Header as="h3" textAlign="center">
                      Current Session: {kountrName}
                    </Header>
                  </Grid.Column>
                  <Grid.Column>
                    <Header as="h3" textAlign="center">
                      Current Kountr: {count}
                    </Header>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
          <Segment>
            <Container
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5rem',
              }}
            >
              <Button size="massive" onClick={handleKount}>
                Add Kount
              </Button>
              <Divider hidden={true} />
              <Button onClick={(): void => props.history.push('/')}>
                Leave Session
              </Button>
            </Container>
          </Segment>
        </Container>
      </Segment>
    </>
  );
};

export default ParticipateDashboard;
