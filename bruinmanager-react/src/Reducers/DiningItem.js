export function diningHasErrored(state = false, action) {
    switch (action.type) {
        case 'DINING_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}

export function diningIsLoading(state = false, action) {
    switch (action.type) {
        case 'DINING_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

export function dining(state = [], action) {
    switch (action.type) {
        case 'DINING_FETCH_DATA_SUCCESS':
            return action.dining;
        default:
            return state;
    }
}