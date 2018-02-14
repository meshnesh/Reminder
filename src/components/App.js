import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text:''
        }
    }

    addReminder() {
        this.props.addReminder(this.state.text);
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
                                            {reminder.text}
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
                            <input id="due_date" type="text" className="validate"/>
                            <label htmlFor="due_date">Date</label>
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

export default connect(mapStateToProps, { addReminder })(App);

