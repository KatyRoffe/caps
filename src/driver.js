'use strict';

// const eventEmitter = require('../index.js');
const client = require('socket.io-client');
const socket = client('http://localhost:3030');

socket.on('pickup', (payload) => {
  socket.on(payload, 'pickup')
  console.log(`${payload.orderId} has been picked up`)

  socket.on(payload, 'in-transit')
  console.log(`${payload.orderId} is en route.`)

  socket.on(payload, 'delivered')
  console.log(`${payload.orderId} has been delivered.`)
});
