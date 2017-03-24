import React, {Component} from 'react';
import {
  BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import {CUSTOMERS} from './customers';
import ListDetail from './ListDetail';
import './App.css';

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      customers: CUSTOMERS
    }
  }

  render() {
    return (
    <Router>
      <div className="container">
        <div className="jumbotron text-center">
          <h1>Welcome to our Customer Application</h1>
        </div>

        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a href="#" className="navbar-brand">Customers</a>
            </div>

            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><Link to="/">List-Detail</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/browse">Browse</Link></li>
                <li><Link to="/add">Add</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container-fluid">
          <Route exact path="/" component="ListDetail"></Route>
          <ListDetail customers={this.state.customers}/>
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
