export function diningHasErrored(bool, name) {
    return {
        type: 'DINING_HAS_ERRORED',
        name: name,
        hasErrored: bool
    };
}

export function diningIsLoading(bool, name) {
    return {
        type: 'DINING_IS_LOADING',
        name: name,
        isLoading: bool
    };
}

export function diningFetchDataSuccess(dining, name) {
    return {
        type: 'DINING_FETCH_DATA_SUCCESS',
        name: name,
        dining: dining,
    }
}

export function diningFetchData(url, name) {
    return (dispatch) => {
        dispatch(diningIsLoading(true, name));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(diningIsLoading(false, name));
                return response;
            })
            .then((response) => response.json())
            .then((dining) => dispatch(diningFetchDataSuccess(dining, name)))
            .catch(() => dispatch(diningHasErrored(true, name)));
    };
}