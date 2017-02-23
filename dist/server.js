'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;
app.get('*', function (req, res) {
    var uri = req.path;
    if (!req.path || req.path == '/') {
        res.sendFile(_path2.default.join(__dirname, '../src/index.html'));
    } else {
        res.sendFile(_path2.default.join(__dirname, req.path));
    }
});

app.listen(port, function (err) {
    if (err) {
        console.log('' + port);
    } else {}
});