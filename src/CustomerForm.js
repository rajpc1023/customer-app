import React, {Component} from 'react';

export default class CustomerForm extends Component {
  constructor(props) {
    super(props);
    let localCustomer = {};

    if (props.customer) {
      Object.assign(localCustomer, props.customer);
    } else {
      // TODO: Move this into a Customer type
      localCustomer = {
        firstName: '',
        lastName: '',
        email: '',
        address: {
          street: '',
          city: '',
          state: '',
          zipcode: ''
        }
      }
    }

    // Object destructuring!
    this.state = { localCustomer };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(proxy, event) {
    proxy.preventDefault();
    console.log('Submit proxy: ', proxy);
    console.log('Submit event: ', event);

  }

  handleChange(proxy, event) {
    console.log('Clicked on the %s element.', proxy.currentTarget.id);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="first-name">First Name: </label>
          <input type="text"
                 value={this.state.localCustomer.firstName}
                 onChange={this.handleChange}
                 id="firstName" 
                 className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name: </label>
          <input type="text"
                 value={this.state.localCustomer.lastName}
                 onChange={this.handleChange}
                 id="lastName" 
                 className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail: </label>
          <input type="text"
                 value={this.state.localCustomer.email}
                 onChange={this.handleChange}
                 id="email"
                 className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="street">Street Address: </label>
          <input type="text"
                 value={this.state.localCustomer.address.street}
                 onChange={this.handleChange}
                 id="street"
                 className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="city">City: </label>
          <input type="text"
                 value={this.state.localCustomer.address.city}
                 onChange={this.handleChange}
                 id="city"
                 className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="state">State: </label>
          <input type="text"
                 value={this.state.localCustomer.address.state}
                 onChange={this.handleChange}
                 id="state"
                 className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="zipcode">Zipcode: </label>
          <input type="text"
                 value={this.state.localCustomer.address.zipcode}
                 onChange={this.handleChange}
                 id="zipcode"
                 className="form-control"/>
        </div>
        <input type="submit" className="btn btn-default" value="Submit"/>
      </form>
    )
  }
}