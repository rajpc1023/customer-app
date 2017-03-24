import React, {Component} from 'react';

export default class CustomerList extends Component {
  constructor( props ) {
    super( props );
    this.handleClick = this.handleClick.bind( this );
  }

  handleClick( proxy, event ) {

    // Convert the customerId in the dataset to a number
    let searchId = +proxy.currentTarget.dataset.customerId,
      foundCustomer = null;
    this.props.customers.some( customer => {
      if ( customer.id === searchId ) {
        foundCustomer = customer;
        return true;
      }
      return false;
    } );

    console.log( foundCustomer );
    this.props.onCustomerClick( foundCustomer );
  }

  render() {
    let rows = this.props.customers.map( customer => {
      return (
        <tr key={customer.id}
            style={{cursor:'pointer'}}
            onClick={this.handleClick}
            data-customer-id={customer.id}>
          <td>{customer.firstName}</td>
          <td>{customer.lastName}</td>
        </tr>
      )
    } );

    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
        </thead>
        <tbody className="text-left">
        {rows}
        </tbody>
      </table>
    )
  }

}