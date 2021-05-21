class AuthService {
    static setUser (user) {
        return localStorage.setItem('user', JSON.stringify(user));
    }

    static isAdmin(){
        if(!AuthService.isAuthenticated()) return false;

        return AuthService.getUser().is_admin;
    }

    static getUser(){
        return JSON.parse(localStorage.getItem('user'));
    }

    static setToken (token) {
        return localStorage.setItem('token', token)
    }

    static getToken () {
        return localStorage.getItem('token')
    }

    static isAuthenticated () {
        return AuthService.getToken() !== null
    }

    static isGuest(){
        return !AuthService.isAuthenticated();
    }

    static logout () {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
}

export default AuthService
