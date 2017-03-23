var faker = require('faker');

function generateCustomers() {
  var customerCount = 50;

  console.log( '[' );
  for ( var x = 0; x < customerCount; x++ ) {
    if ( x > 0 ) console.log( ',' );
    console.log( faker.helpers.customerCard(x) );
  }
  console.log( ']' );
}

faker.helpers.customerCard = function(id) {
    return {
      "id": id,
      "firstName" : faker.name.firstName(),
      "lastName" : faker.name.lastName(),
      "email": faker.internet.email(),
      "address": {
        "street": faker.address.streetAddress(),
        "city": faker.address.city(),
        "state": faker.address.state(),
        "zipcode": faker.address.zipCode()
      }
    };
};

generateCustomers();