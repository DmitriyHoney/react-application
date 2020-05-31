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
        let {email, password, rememberMe, captcha} = formData;
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logOutTheSite() {
        return instance.delete(`auth/login`)
    },
    requestCaptcha() {
        return instance.get(`security/get-captcha-url`);
    }
}

export const profileApi = {
    getProfilePeople(userId) {
        return instance.get(`profile/${userId}`)
    },
    getUserStatus(userId = 6722) {
        return instance.get(`profile/status/${userId}`)
    },
    updateUserStatus(status) {
        return instance.put(`profile/status`, {status})
    },
    savePhotoToServer(photoFile) {
        let formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: { 'content-type': 'multipart/form-data' }
        })
    },
    sendEditProfileSettings(formData) {
        let {
            userId = 6722,
            lookingForAJob,
            lookingForAJobDescription,
            aboutMe: AboutMe,
            fullName,
            github,
            vk,
            facebook,
            instagram,
            twitter,
            website,
            youtube,
            mainLink
        } = formData;

        return instance.put(`profile`, {
            userId,
            lookingForAJob,
            lookingForAJobDescription,
            fullName,
            AboutMe,
            contacts: {
                github, vk, facebook, instagram, twitter, website, youtube, mainLink
            }
        })
    }
}