// This will be compiled in runtime

import { AuthManager } from "./auth";
const authManager = new AuthManager();
authManager.register('nilabhro', 'nc@123');
authManager.login('nilabhro', 'nc@123');

setTimeout(() => {
authManager.checkSession();
}, 300000)

export {}