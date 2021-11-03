'use strict';

// const eventEmitter = require('../index.js');
const client = require('socket.io-client');
const caps = client('http://localhost:3030');

caps.on('pickup', (payload) => {
  caps.on(payload, 'pickup')
  console.log(`${payload.orderId} has been picked up`)

  caps.on(payload, 'in-transit')
  console.log(`${payload.orderId} is en route.`)

  caps.on(payload, 'delivered')
  console.log(`${payload.orderId} has been delivered.`)
});
