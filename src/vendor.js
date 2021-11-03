'use strict';

const client = require('socket.io-client');
const faker = require('faker');
const socket = client('http://localhost:3030');

socket.emit('delivered', (payload) => {
  console.log('Delivery successful.', payload);
});

socket.emit('order', () => {

  socket.emit('pickup', {
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

socket.emit('order', {
  store: faker.company.companyName(),
  orderId: faker.datatype.uuid(),
  customer: faker.name.findName(),
  address: faker.address.streetAddress(),
});
