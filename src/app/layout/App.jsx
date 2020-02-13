import React, { Component, Fragment } from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/navBar/NavBar';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <NavBar></NavBar>
          <Container className='main'>
            <EventDashboard></EventDashboard>
          </Container>
        </Fragment>
      </div>
    );
  }
}

export default App;
