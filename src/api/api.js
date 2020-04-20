import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '2aa95529-03f3-4e18-bb22-995bc7fdf5db'
    }
});

export const usersApi = {
    getUsers(currentPage = 1, countUsers = 7) {
        return instance.get(`/users?count=${countUsers}&page=${currentPage}`)
    },
    followOnUser(userId) {
        return instance.post(`follow/${userId}`)
    },
    unFollowOnUser(userId) {
        return instance.delete(`follow/${userId}`)
    }
}

export const authApi = {
    getAuthState() {
        return instance.get(`auth/me`)
    },
    loginTheSite(formData) {
        let {email, password, rememberMe} = formData;
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    loginOutTheSite() {
        return instance.delete(`auth/login`)
    },
}

export const profileApi = {
    getProfilePeople(userId) {
        return instance.get(`profile/${userId}`)
    }
}