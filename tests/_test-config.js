appRoot = __dirname.replace('/tests', '');
expect = require('chai').expect;
nodeMocksHttp = require('node-mocks-http');
proxyquire = require('proxyquire');
sinon = require('sinon');
