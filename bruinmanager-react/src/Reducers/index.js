import { combineReducers } from 'redux';
import { events, eventsHasErrored, eventsIsLoading } from './SuggestedEvents.js';
import { dining, diningHasErrored, diningIsLoading } from './DiningItem.js';
import { fb_login } from './Login.js';

export default combineReducers({
    events,
    eventsHasErrored,
    eventsIsLoading,
    dining,
    diningHasErrored,
    diningIsLoading,
    fb_login
});