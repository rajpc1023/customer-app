import React, {Component} from 'react';
import {CUSTOMERS} from './customers';
import ListDetail from './ListDetail';
import SearchForm from './SearchForm';
import './App.css';

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      customers: CUSTOMERS,
      currentView: null
    };

    this.views = {
      SearchForm: <SearchForm/>,
      ListDetail: <ListDetail customers={this.state.customers}/>
    };

    this.handleViewSelect = this.handleViewSelect.bind( this );
  }

  componentDidMount() {
    this.setState({currentView: this.views.ListDetail});
  }

  handleViewSelect( event ) {
    event.preventDefault();

    console.log( event.target.dataset.destination );
    this.setState( { currentView: this.views[ event.target.dataset.destination ] } );
  }

  render() {
    return (
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
              <ul className="nav navbar-nav" onClick={this.handleViewSelect}>
                <li className="active"><a data-destination="ListDetail"
                                          href="#">List-Detail</a></li>
                <li><a data-destination="SearchForm" href="#">Search</a></li>
                <li><a href="#">Browse</a></li>
                <li><a href="#">Add</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container-fluid">
          {/*<ListDetail customers={this.state.customers}/>*/}
          {this.state.currentView}
        </div>
      </div>
    );
  }
}

export default App;
