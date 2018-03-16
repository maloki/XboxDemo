'use strict';

var _router = require('./core/router.js');

var _router2 = _interopRequireDefault(_router);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('./core/config.js');

var _config2 = _interopRequireDefault(_config);

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requireToken = _passport2.default.authenticate('jwt', { session: false });
var requirePassword = _passport2.default.authenticate('local', { session: false });

var app = (0, _express2.default)();
var port = process.env.PORT || 3000;
// body parser and content limit for images
app.use(_bodyParser2.default.urlencoded({ extended: false }));
//app.use(bodyParser.json())
app.use(_bodyParser2.default.json({ limit: '50mb' }));
app.use(_bodyParser2.default.urlencoded({ limit: '50mb', extended: true }));
app.use(_express2.default.static('public'));
// api routes
(0, _router2.default)(app);
// database
_mongoose2.default.Promise = _q2.default.Promise;
_mongoose2.default.connect(_config2.default.mongoConnect);
// application 
app.get("*", function (req, res) {
  res.sendFile(_path2.default.resolve('server', 'index.html'));
});
app.listen(port, function () {
  return console.log('Server is working on ' + port);
});