import { combineReducers } from 'redux';
import { events, eventsHasErrored, eventsIsLoading } from './SuggestedEvents.js';
import { fb_login } from './Login.js';

export default combineReducers({
    events,
    eventsHasErrored,
    eventsIsLoading,
    fb_login
});