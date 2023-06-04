"use strict";
//This is the business logic of the code
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthManager = void 0;
var user_1 = require("./user");
var AuthManager = /** @class */ (function () {
    function AuthManager() {
    }
    AuthManager.prototype.register = function (username, password) {
        var user = new user_1.User(username, password);
        localStorage.setItem('user', JSON.stringify(user));
    };
    AuthManager.prototype.login = function (username, password) {
        var storedUser = localStorage.getItem('user');
        if (storedUser) {
            var user = JSON.parse(storedUser);
            if (user.username === username && user.password === password) {
                localStorage.setItem('loggedIn', 'true');
                console.log('Login successful.');
            }
            else {
                console.log('Invalid username or password.');
            }
        }
        else {
            console.log('User not found. Please register.');
        }
    };
    AuthManager.prototype.logout = function () {
        localStorage.removeItem('loggedIn');
        console.log('Logout successful.');
    };
    AuthManager.prototype.getCurrentUser = function () {
        var storedUser = localStorage.getItem('user');
        if (storedUser) {
            return JSON.parse(storedUser);
        }
        return null;
    };
    AuthManager.prototype.checkSession = function () {
        var loggedIn = localStorage.getItem('loggedIn');
        if (!loggedIn) {
            console.log('Session expired. Logging out...');
            this.logout();
        }
    };
    return AuthManager;
}());
exports.AuthManager = AuthManager;
