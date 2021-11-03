'use strict';

const client = require('socket.io-client');
const faker = require('faker');
const caps = client('http://localhost:3030');

caps.emit('delivered', (payload) => {
  console.log('Delivery successful.', payload);
});

caps.emit('order', () => {

  caps.emit('pickup', {
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

caps.emit('order', {
  store: faker.company.companyName(),
  orderId: faker.datatype.uuid(),
  customer: faker.name.findName(),
  address: faker.address.streetAddress(),
});
