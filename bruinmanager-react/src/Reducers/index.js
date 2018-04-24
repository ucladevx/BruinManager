import { combineReducers } from 'redux';
import { events, eventsHasErrored, eventsIsLoading } from './SuggestedEvents.js';

export default combineReducers({
    events,
    eventsHasErrored,
    eventsIsLoading
});