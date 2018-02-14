import React, { Component } from 'react';

export default class App extends Component{
    render() {
        return (
            <div className="App">
                <div className="title">
                    <h3>Reminder Pro</h3>
                </div>
                <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s4">
                            <input id="first_name" type="text" className="validate"/>
                            <label for="first_name">First Name</label>
                        </div>

                        <div className="input-field col s4">
                            <input id="last_name" type="text" className="validate"/>
                            <label for="last_name">Last Name</label>
                        </div>
                        <div className="col s4">
                            <a className="waves-effect waves-light btn-large">Save</a>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}
