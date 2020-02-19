import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

class EventForm extends Component {
  state = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: ''
  };

  componentDidMount() {
    if (this.props.selectedEvent != null) {
      this.setState({
        ...this.props.selectedEvent
      });
    }
  }

  handleFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.id != null) {
      this.props.updateEvent(this.state);
    } else {
      this.props.createEvent(this.state);
    }
  };

  handleOnChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { cancelFormOpen } = this.props;
    const { title, date, city, venue, hostedBy } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              name='title'
              onChange={this.handleOnChange}
              value={title}
              placeholder='First Name'
              autoComplete='off'
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name='date'
              onChange={this.handleOnChange}
              value={date}
              type='date'
              placeholder='Event Date'
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name='city'
              onChange={this.handleOnChange}
              value={city}
              placeholder='City event is taking place'
              autoComplete='off'
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name='venue'
              onChange={this.handleOnChange}
              value={venue}
              placeholder='Enter the Venue of the event'
              autoComplete='off'
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name='hostedBy'
              onChange={this.handleOnChange}
              value={hostedBy}
              placeholder='Enter the name of person hosting'
              autoComplete='off'
            />
          </Form.Field>
          <Button positive type='submit'>
            Submit
          </Button>
          <Button type='button' onClick={cancelFormOpen}>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
