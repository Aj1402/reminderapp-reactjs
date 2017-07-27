import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { addReminder, deleteReminder } from '../actions';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    };
  }

  addReminder() {
    this.props.addReminder(this.state.text);
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-md-4 col-sm-9 col-xs-10">
        {
          reminders.map((reminder) => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">{reminder.text}</div>
                <div className="list-item delete-button">
                  &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          Reminder App
        </div>
        <div className="form-inline reminder-form">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to..."
              onChange = {event => this.setState({text: event.target.value})}
            />
            <button
              className="btn btn-success"
              onClick = {() => this.addReminder()}
            >
              Add Reminder
            </button>
          </div>
        </div>
        { this.renderReminders() }
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({addReminder}, dispatch);
// }

function mapStateToProps(state) {
  return {
    reminders: state
  };
}

export default connect(mapStateToProps, {addReminder})(App);
