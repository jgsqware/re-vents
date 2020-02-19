import React, { Component, Fragment } from 'react';
import NavBar from '../../features/nav/navBar/NavBar';
import HomePage from '../../features/home/HomePage';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router';
import EventDashboard from '../../features/events/EventDashboard/EventDashboard';
import EventDetailedPage from '../../features/events/EventDetailed/EventDetailedPage';
import EventForm from '../../features/events/EventForm/EventForm';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/user/UserDetailedPage/UserDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route component={HomePage} exact path='/' />
        <Route
          path='/(.+)'
          render={() => (
            <Fragment>
              <NavBar></NavBar>
              <Container className='main'>
                <Route component={EventDashboard} path='/events' />
                <Route component={EventDetailedPage} path='/events/:id' />
                <Route component={EventForm} path='/createEvent' />
                <Route component={PeopleDashboard} path='/people' />
                <Route component={UserDetailedPage} path='/profile/:id' />
                <Route component={SettingsDashboard} path='/settings' />
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default App;
