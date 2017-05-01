"use strict";
var User = (function () {
    function User(id, email, username, password) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.password = password;
    }
    return User;
}());
exports.User = User;
