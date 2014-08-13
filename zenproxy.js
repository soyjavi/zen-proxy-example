/*jslint node: true, indent: 4, maxlen: 80 */
"use strict";

var zenproxy = require('zenproxy');

zenproxy.run()

setTimeout(function() {
  zenproxy.addHost("sub.domain.com", "localhost", 1986);
  zenproxy.addHost("sub.domain.com", "localhost", 1987);
}, 1000);

setTimeout(function() {
  zenproxy.removeHost("domain.com", "127.0.0.1", 1987);
}, 2000);
