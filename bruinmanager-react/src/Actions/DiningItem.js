export function diningHasErrored(bool) {
    return {
        type: 'DINING_HAS_ERRORED',
        hasErrored: bool
    };
}

export function diningIsLoading(bool) {
    return {
        type: 'DINING_IS_LOADING',
        isLoading: bool
    };
}

export function diningFetchDataSuccess(dining) {
    return {
        type: 'DINING_FETCH_DATA_SUCCESS',
        dining
    };
}

export function diningFetchData(url) {
    return (dispatch) => {
        dispatch(diningIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(diningIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((dining) => dispatch(diningFetchDataSuccess(dining)))
            .catch(() => dispatch(diningHasErrored(true)));
    };
}