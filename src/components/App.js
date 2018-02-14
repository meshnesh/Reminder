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
                        <div className="input-field col s6">
                            <input id="to_do" type="text" className="validate"/>
                            <label for="to_do">What to do</label>
                        </div>

                        <div className="input-field col s6">
                            <input id="due_date" type="text" className="validate"/>
                            <label for="due_date">Date</label>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <a className="waves-effect waves-light btn">Save</a>
                            </div>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}
