//AppState;
import {createSelector} from "reselect";
export const getInitializeSelector = state => state.app.initialize
//AuthState
export const getAuthPageSelector = state => state.authPage;
//ProfilePage
export const getProfilePageSelector = state => state.profilePage;
//UsersPage
export const getUsersPageSelector = state => state.usersPage;
//AsidePage
export const getSidebarLinks = state => state.sidebar.links;
export const getSidebarFriends = state => state.sidebar.friends;
export const getFilterSidebarLinks = createSelector([getSidebarLinks], (links) => {
    return links.filter(l => true);
});
//DialogsPage
export const getDialogsPage = state => state.dialogsPage;