'use strict';

const vendorPackage = require('./events.js');
const faker = require('faker');

vendorPackage.on('delivered', (payload) => {
  console.log('Delivery successful.', payload);
});

vendorPackage.on('order', () => {

  vendorPackage.emit('pickup', {
    event: 'pickup',
    time: faker.date.soon(),
    payload: {
      store: faker.company.companyName(),
      orderId: faker.datatype.uuid(),
      customer: faker.name.findName(),
      address: faker.address.streetAddress(),
    }
  });
});

vendorPackage.emit('order', {
  store: faker.company.companyName(),
  orderId: faker.datatype.uuid(),
  customer: faker.name.findName(),
  address: faker.address.streetAddress(),
});
