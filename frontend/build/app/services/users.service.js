"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var UsersService = (function () {
    // Constructor function
    function UsersService(http) {
        this.http = http;
        // API: users URL
        this.url = '/api/v1/users';
    }
    UsersService.prototype.getOptions = function () {
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        return new http_1.RequestOptions({ headers: header });
    };
    // Add user function (returns the added user)
    UsersService.prototype.addUser = function (user) {
        var data = JSON.stringify(user);
        return this.http.post(this.url, data, this.getOptions())
            .map(function (res) { return res.json(); });
    };
    // Delete user function (returns the delete user)
    UsersService.prototype.deleteUser = function (id) {
        return this.http.delete(this.url + '/' + id, this.getOptions())
            .map(function (res) { return res.json(); });
    };
    // Update user function (returns the updated user)
    UsersService.prototype.updateUser = function (user) {
        var data = JSON.stringify(user);
        return this.http.put(this.url + '/' + user.id, data, this.getOptions())
            .map(function (res) { return res.json(); });
    };
    // Get user function (returns the selected user)
    UsersService.prototype.getUser = function (id) {
        return this.http.get(this.url + '/' + id, this.getOptions())
            .map(function (res) { return res.json(); });
    };
    // Get list of users function (returns the list of users)
    UsersService.prototype.getUsers = function () {
        return this.http.get(this.url, this.getOptions())
            .map(function (res) { return res.json(); });
    };
    return UsersService;
}());
UsersService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UsersService);
exports.UsersService = UsersService;
