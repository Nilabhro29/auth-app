"use strict";
// This will be compiled in runtime
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = require("./auth");
var authManager = new auth_1.AuthManager();
authManager.register('nilabhro', 'nc@123');
authManager.login('nilabhro', 'nc@123');
setTimeout(function () {
    authManager.checkSession();
}, 300000);
