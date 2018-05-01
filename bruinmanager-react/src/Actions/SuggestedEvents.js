export function eventsHasErrored(bool) {
    return {
        type: 'EVENTS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function eventsIsLoading(bool) {
    return {
        type: 'EVENTS_IS_LOADING',
        isLoading: bool
    };
}

export function eventsFetchDataSuccess(events) {
    return {
        type: 'EVENTS_FETCH_DATA_SUCCESS',
        events
    };
}

export function eventsFetchData(url) {
    return (dispatch) => {
        dispatch(eventsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(eventsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((events) => dispatch(eventsFetchDataSuccess(events)))
            .catch(() => dispatch(eventsHasErrored(true)));
    };
}