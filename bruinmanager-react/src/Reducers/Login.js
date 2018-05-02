export function fb_login(state = {}, action) {
    switch (action.type) {
        case 'FB_LOGIN_FETCH_DATA_SUCCESS':
            return action.fb;
        default:
            return state;
    }
}