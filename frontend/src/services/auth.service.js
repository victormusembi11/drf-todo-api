import axios from 'axios';

const login = (username, password) => {
    return axios.post(
        'http://127.0.0.1:8000/accounts/api-token-auth/', {
            username,
            password
        }
    )
    .then((res) => {
        if (res.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(res.data));
        }
        return res.data;
    });
}

const logout = () => {
    return localStorage.removeItem('user');
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}

const authService = {
    login,
    logout,
    getCurrentUser
}

export default authService;
