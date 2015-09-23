'use strict';

const balance = require('udp-balancer');

// servers to balance
const servers = [
    '192.168.99.100:5683'
];

// create instance of balancer
const balancer = balance(servers);

// bind balancer to port 5684
balancer.bind(5684);