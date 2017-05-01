"use strict";
var SignupForm = (function () {
    function SignupForm(email, username, password) {
        this.email = email;
        this.username = username;
        this.password = password;
    }
    return SignupForm;
}());
exports.SignupForm = SignupForm;
