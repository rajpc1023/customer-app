import React, {Component} from 'react';

export default class CustomerDetail extends Component {

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">{this.props.customer.firstName}{' '}
          {this.props.customer.lastName}</div>
        <ul className="list-group">
          <li className="list-group-item text-left">
            {this.props.customer.firstName}{' '}{this.props.customer.lastName}
          </li>
          <li className="list-group-item text-left">
            {this.props.customer.address.street}
          </li>
          <li className="list-group-item text-left">
            {this.props.customer.address.city},{' '}
            {this.props.customer.address.state}{' '}
            {this.props.customer.address.zipcode}
          </li>
        </ul>
      </div>
    )
  }
}