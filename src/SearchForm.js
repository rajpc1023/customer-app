import React, {Component} from 'react';
import CustomerForm from './CustomerForm';

export default class SearchForm extends Component {
  render() {
    return (
      <div>
      <div className="row">
        <h2>Searching for Customers</h2>
      </div>
        <CustomerForm/>
      </div>
    )
  }
}