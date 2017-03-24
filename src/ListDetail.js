import React, {Component} from 'react';
import CustomerDetail from './CustomerDetail';
import CustomerList from './CustomerList';
import './ListDetail.css';

export default class ListDetail extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      selectedCustomer: props.customers[ 0 ]
    };

    this.handleCustomerClick = this.handleCustomerClick.bind( this );
  }

  handleCustomerClick( customer ) {
    this.setState( { selectedCustomer: customer } );
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h3>Customer List:</h3>
          <div className="lock-height">
            <CustomerList customers={this.props.customers}
                          onCustomerClick={this.handleCustomerClick}/>
          </div>
        </div>
        <div className="col-md-6">
          <h3>Customer of the month:</h3>
          <CustomerDetail customer={this.state.selectedCustomer}/>
        </div>
      </div>
    )
  }
}