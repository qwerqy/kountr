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
import copy from 'clipboard-copy';
import firebase from '../firebase';

const HostDashboard: React.SFC<any> = (props: any): JSX.Element => {
  const [isCopied, setIsCopied] = useState(false);
  const [count, setCount] = useState(0);
  const [kountrName, setKountrName] = useState('');
  const [uid, setUid] = useState('');
  const kid = props.match.params.id;

  useEffect(() => {
    const KountrCountRef = firebase.database.ref(
      'kountrs/' + kid + '/data/count'
    );

    setUid(props.uid);

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
          // Check if the user is the owner.
          if (props.uid && snapshot.val().data.owner === props.uid) {
            setKountrName(snapshot.val().data.name);
            setUid(props.uid);
          } else {
            firebase.auth.onAuthStateChanged((user: firebase.User | null) => {
              if (user && user.uid === snapshot.val().data.owner) {
                setKountrName(snapshot.val().data.name);
                setUid(user.uid);
              } else {
                props.history.push('/');
              }
            });
          }
        } else {
          props.history.push('/');
        }
      });
  }, [kid, props.uid]);

  const handleEnd = (): void => {
    firebase.database
      .ref(`kountrs/${kid}`)
      .child('data')
      .remove((error: any) => {
        if (error) {
          throw new Error(`Something went wrong removeing from db: ${error}`);
        } else {
          alert('Thank you for using Kountr! See you again!');
          props.history.push('/');
        }
      });
  };

  const handleReset = (): void => {
    firebase.database
      .ref(`kountrs/${kid}`)
      .child('data')
      .update(
        {
          count: 0,
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container text={true}>
          <Header
            style={{ marginTop: 0, fontWeight: '400' }}
            className="Hero-title"
            textAlign="center"
            as="h1"
          >
            Kountr
          </Header>
          <Segment>
            <Container>
              <Header as="h4">Share this link to your participants:</Header>
              <Input
                className="Share-link"
                value={`${process.env.REACT_APP_DOMAIN}/participate/${kid}`}
                fluid={true}
                icon={isCopied ? 'check' : 'copy'}
                onClick={(): void => {
                  copy(`${process.env.REACT_APP_DOMAIN}/participate/${kid}`);
                  setIsCopied(true);
                }}
              />
            </Container>
          </Segment>
          <Segment>
            <Container>
              <Header style={{ marginTop: 0 }} textAlign="center" as="h1">
                {kountrName} Kountr
              </Header>
              <Divider hidden={true} />
              <Header
                style={{
                  fontSize: '15rem',
                }}
                textAlign="center"
                as="h1"
              >
                {count}
              </Header>
              <Grid columns={2}>
                <Grid.Row>
                  <Grid.Column stretched={true}>
                    <Button color="red" onClick={handleEnd}>
                      END
                    </Button>
                  </Grid.Column>
                  <Grid.Column stretched={true}>
                    <Button color="orange" onClick={handleReset}>
                      RESET
                    </Button>
                  </Grid.Column>
                </Grid.Row>
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
    </>
  );
};

export default HostDashboard;
