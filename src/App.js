import React, {Component} from 'react';
import {CUSTOMERS} from './customers';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers : CUSTOMERS
    }
  }

  render() {
    return (
      <div className="App container">
        <div className="App-header row">
          <h2>Welcome to our Customer Application</h2>
        </div>

        <div className="row">
          <div className="col-md-4">
            <p>Our first customer:&nbsp;
              {this.state.customers[0].firstName}{' '}
              {this.state.customers[0].lastName}</p>
          </div>
          <div className="col-md-4">
            <p>
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
          <div className="col-md-4">
            <p>Right content</p>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
