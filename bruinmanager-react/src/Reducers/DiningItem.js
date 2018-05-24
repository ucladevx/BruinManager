export function diningHasErrored(state = {}, action) {
    switch (action.type) {
        case 'DINING_HAS_ERRORED':
            state[action.name] = action.hasErrored;
            return state;
        default:
            return state;
    }
}

export function diningIsLoading(state = {}, action) {
    switch (action.type) {
        case 'DINING_IS_LOADING':
            state[action.name] = action.isLoading;
            return state;
        default:
            return state;
    }
}

export function dining(state = {}, action) {
    switch (action.type) {
        case 'DINING_FETCH_DATA_SUCCESS':
            state[action.name] = action.dining;
            return state;
        default:
            return state;
    }
}