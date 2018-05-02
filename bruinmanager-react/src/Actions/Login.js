export function facebookLoginFetchData(fb) {
    return {
        type: 'FB_LOGIN_FETCH_DATA_SUCCESS',
        fb
    };
}

export function facebookFetchData(response) {
    return (dispatch) => {

        console.log("hello");
        console.log(response);
        let fb = {
            "name": response.name,
            "email": response.email,
            "id": response.userID,
            "picture": response.picture.data.url,
        };

        dispatch(facebookLoginFetchData(fb));
        return fb;

        //localStorage.setItem('myBMData', JSON.stringify(fb));
        //history.push('/dashboard');
    };
}