import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder } from '../actions';
import moment from 'moment';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text:'',
            dueDate: ''
        }
    }

    addReminder() {
        console.log('this.state.dueDate', this.state.dueDate)
        this.props.addReminder(this.state.text, this.state.dueDate);
    }

    deleteReminder(id) {
        this.props.deleteReminder(id);
    }

    renderReminder() {
        const { reminders } = this.props;
        return (
            <div className="row">
                <div className="col s12">
                    <div className="row">
                        <ul className="collection col s8">
                            {
                                reminders.map(reminder => {
                                    return (
                                        <li className="collection-item"
                                            key={reminder.id}>
                                            <div className="collection-item">
                                                {reminder.text} <em>{moment(new Date(reminder.dueDate)).fromNow()}</em>
                                                <a className="red darken-4 right"
                                                    onClick={() =>this.deleteReminder(reminder.id) }
                                                >
                                                    &#x2715;
                                                </a>
                                            </div>
                                        </li>
                
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="App">
                <div className="title">
                    <h3>Reminder Pro</h3>
                </div>
                <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="to_do" type="text" className="validate"
                                onChange={event => this.setState({text: event.target.value})}
                            />
                            <label htmlFor="to_do">What to do</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="due_date" type="datetime-local" className="validate"
                                onChange={event => this.setState({dueDate: event.target.value})}
                            />
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <a className="waves-effect waves-light btn"
                                    onClick={() => this.addReminder()}
                                >Save</a>
                            </div>
                        </div>
                    </div>
                </form>
                { this.renderReminder() }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // console.log('state', state)
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, { addReminder, deleteReminder })(App);

