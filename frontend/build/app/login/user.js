"use strict";
var User = (function () {
    function User(email, username, password) {
        this.email = email;
        this.username = username;
        this.password = password;
    }
    return User;
}());
exports.User = User;
