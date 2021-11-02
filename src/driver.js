'use strict';

const eventEmitter = require('../index.js');

eventEmitter.on('pickup', (payload) => {
  eventEmitter.emit(payload, 'pickup')
  console.log(`${payload.orderId} has been picked up`)

  eventEmitter.emit(payload, 'in-transit')
  console.log(`${payload.orderId} is en route.`)

  eventEmitter.emit(payload, 'delivered')
  console.log(`${payload.orderId} has been delivered.`)
});
