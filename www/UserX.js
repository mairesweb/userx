var UserX = function() {
    var _apiKey = "";
};

var exec = require('cordova/exec');

module.exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'UserX', 'coolMethod', [arg0]);
};

module.exports.add = function (arg0, success, error) {
	exec(success, error, 'UserX', 'add', [arg0]);
}