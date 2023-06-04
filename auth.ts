//This is the business logic of the code

import {User} from './user'
export class AuthManager {
    register(username: string, password: string) {
    const user = new User(username, password);
    localStorage.setItem('user', JSON.stringify(user));
    }
    
    login(username: string, password: string) {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
    const user: User = JSON.parse(storedUser);
    if (user.username === username && user.password === password) {
    localStorage.setItem('loggedIn', 'true');
    console.log('Login successful.');
    } else {
    console.log('Invalid username or password.');
    }
    } else {
    console.log('User not found. Please register.');
    }
    }
    
    logout() {
    localStorage.removeItem('loggedIn');
    console.log('Logout successful.');
    }
    
    getCurrentUser(): User | null {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
    return JSON.parse(storedUser);
    }
    return null;
    }
    
    checkSession() {
    const loggedIn = localStorage.getItem('loggedIn');
    if (!loggedIn) {
    console.log('Session expired. Logging out...');
    this.logout();
    }
    }
}