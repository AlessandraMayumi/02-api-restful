"use strict";
exports.__esModule = true;
var fastify_1 = require("fastify");
var app = (0, fastify_1["default"])();
app.get('/', function () {
    return 'Hello World';
});
app.listen({
    port: 3333
}).then(function () {
    console.log('HTTP server running');
});
